import fs from 'node:fs/promises'
import path from 'node:path'
import glob from 'fast-glob'
import yaml from 'js-yaml'

import { navigation } from '@/lib/navigation'

const SITE_URL = 'https://docs.inkdrop.app'
const APP_DIR = path.join(process.cwd(), 'src/app')

// Wrapper tags that only style their content, which is kept as-is
const WRAPPER_TAGS = new Set([
  'mark',
  'underline',
  'sub',
  'sup',
  'carousel',
  'quick-links',
  'snippet',
])

type Frontmatter = {
  title?: string
  youtubeVideoId?: string
  nextjs?: { metadata?: { title?: string; description?: string } }
}

type Attrs = Record<string, string>

function parseAttrs(source: string): Attrs {
  let attrs: Attrs = {}
  for (let [, key, quoted, bare] of source.matchAll(
    /([\w-]+)=(?:"([^"]*)"|(\S+))/g,
  )) {
    attrs[key] = quoted ?? bare
  }
  return attrs
}

function absolutize(url: string) {
  return url.startsWith('/') ? SITE_URL + url : url
}

function image(src: string, alt = '') {
  return `![${alt}](${absolutize(src)})`
}

function video(src: string) {
  return `[Video](${absolutize(src)})`
}

function quote(text: string) {
  return text
    .trim()
    .split('\n')
    .map((line) => (line ? `> ${line}` : '>'))
    .join('\n')
}

// Converts Markdoc-specific syntax into plain Markdown that renders anywhere
function convertMarkdoc(body: string) {
  // Keep code untouched while rewriting tags and links: fenced blocks (also
  // indented ones inside lists, and `~~~` fences) and inline code spans
  let code: Array<string> = []
  let protect = (text: string) => {
    code.push(text)
    return `\u0000CODE${code.length - 1}\u0000`
  }
  let restore = (text: string) =>
    text.replace(/\u0000CODE(\d+)\u0000/g, (_, i) => code[Number(i)])

  body = body
    .replace(
      /^[ \t]*(`{3,}|~{3,})[^\n]*\n[\s\S]*?^[ \t]*\1[ \t]*$/gm,
      (fence) => protect(fence.replace(/\\```/g, '```')),
    )
    .replace(/(?<![\\`])(`+)[^`\n][^\n]*?(?<!`)\1(?!`)/g, protect)

  body = body
    // Annotations such as `{% .lead %}`
    .replace(/[ \t]*\{%\s*\.[\w-]+\s*%\}/g, '')
    .replace(/\{%\s*kbd\s+s="([^"]*)"\s*\/\s*%\}/g, '`$1`')
    .replace(/\{%\s*kbd\s*%\}([\s\S]*?)\{%\s*\/kbd\s*%\}/g, '`$1`')
    .replace(/\{%\s*check\s+v=(true|false)\s*\/\s*%\}/g, (_, v) =>
      v === 'true' ? '✅' : '❌',
    )
    // Decorative UI icons carry no meaning in plain text
    .replace(/\{%\s*icon\s+[^%]*?\/\s*%\}[ \t]?/g, '')
    .replace(/\{%\s*img\s+([^%]*?)\/\s*%\}/g, (_, attrs) => {
      let { src, alt } = parseAttrs(attrs)
      return image(src, alt)
    })
    .replace(/\{%\s*video\s+([^%]*?)\/\s*%\}/g, (_, attrs) =>
      video(parseAttrs(attrs).src),
    )
    .replace(/\{%\s*quick-link\s+([^%]*?)\/\s*%\}/g, (_, attrs) => {
      let { title, href, description } = parseAttrs(attrs)
      return `- [${title}](${absolutize(href)})${description ? `: ${description}` : ''}`
    })
    // Rendered from the navigation by the ThumbLinks component
    .replace(
      /\{%\s*thumb-links\s+([^%]*)%\}[\s\S]*?\{%\s*\/thumb-links\s*%\}/g,
      (_, attrs) =>
        navigation[Number(parseAttrs(attrs).category)].links
          .map((link) => `- [${link.title}](${absolutize(link.href)})`)
          .join('\n'),
    )
    // Quoted after code is restored so multi-line fences stay inside the quote
    .replace(
      /\{%\s*callout([^%]*)%\}([\s\S]*?)\{%\s*\/callout\s*%\}/g,
      (_, attrs, content) => {
        let { title, type = 'note' } = parseAttrs(attrs)
        let label = type === 'warning' ? 'Warning' : 'Note'
        let heading = title ? `**${label}: ${title}**\n\n` : `**${label}**\n\n`
        return `\u0001QUOTE${heading}${content.trim()}\u0001`
      },
    )
    .replace(
      /\{%\s*carousel-item\s+([^%]*)%\}([\s\S]*?)\{%\s*\/carousel-item\s*%\}/g,
      (_, attrs, content) => {
        let { title, image: src, video: videoSrc, alt } = parseAttrs(attrs)
        let media = src ? image(src, alt) : videoSrc && video(videoSrc)
        return [title && `**${title}**`, media, content.trim()]
          .filter(Boolean)
          .join('\n\n')
      },
    )
    .replace(/\{%\s*snippet\s+([^%]*)%\}/g, (_, attrs) => {
      let { filename } = parseAttrs(attrs)
      return filename ? `**${filename}**` : ''
    })
    // Fail the build on tags without a Markdown conversion instead of silently
    // dropping their content
    .replace(/\{%\s*\/?([\w-]+)[^%]*%\}/g, (_, name) => {
      if (WRAPPER_TAGS.has(name)) return ''
      throw new Error(`No Markdown conversion for the Markdoc tag: ${name}`)
    })
    // Site-relative inline links and reference definitions
    .replace(/\]\(\/(?!\/)/g, `](${SITE_URL}/`)
    .replace(/^([ \t]*\[[^\]\n]+\]:[ \t]*)\/(?!\/)/gm, `$1${SITE_URL}/`)
    .replace(/\n{3,}/g, '\n\n')

  return restore(body).replace(/\u0001QUOTE([^\u0001]*)\u0001/g, (_, text) =>
    quote(text),
  )
}

function pageFile(slug: Array<string>) {
  return path.join(APP_DIR, ...slug, 'page.md')
}

export async function getMarkdownSlugs() {
  let files = await glob('**/page.md', { cwd: APP_DIR })
  return files.map((file) => file.split('/').slice(0, -1))
}

// Example notes are left out of the llms.txt files, as in the search index
async function getLlmsSlugs() {
  let slugs = await getMarkdownSlugs()
  return slugs.filter((slug) => slug[0] !== 'examples')
}

async function readPage(slug: Array<string>) {
  let source = (await fs.readFile(pageFile(slug), 'utf8')).replace(
    /\r\n?/g,
    '\n',
  )
  let match = source.match(/^---\n([\s\S]*?)\n---\n?/)
  let frontmatter = (match ? yaml.load(match[1]) : {}) as Frontmatter

  return {
    title: frontmatter.title ?? frontmatter.nextjs?.metadata?.title,
    description: frontmatter.nextjs?.metadata?.description,
    youtubeVideoId: frontmatter.youtubeVideoId,
    body: match ? source.slice(match[0].length) : source,
  }
}

function markdownUrl(slug: Array<string>) {
  return `${SITE_URL}/${slug.length > 0 ? slug.join('/') : 'index'}.md`
}

export async function getPageMarkdown(slug: Array<string>) {
  let { title, description, youtubeVideoId, body } = await readPage(slug)
  let url = `${SITE_URL}/${slug.join('/')}`

  return [
    title && `# ${title}`,
    description && `> ${description}`,
    `Source: ${url}`,
    youtubeVideoId &&
      `Video: https://www.youtube.com/watch?v=${youtubeVideoId.replace('?', '&')}`,
    convertMarkdoc(body).trim(),
  ]
    .filter(Boolean)
    .join('\n\n')
    .concat('\n')
}

async function linkItem(slug: Array<string>, title?: string) {
  let page = await readPage(slug)
  let item = `- [${title ?? page.title ?? slug.join('/')}](${markdownUrl(slug)})`
  return page.description ? `${item}: ${page.description}` : item
}

// Index of all pages following the llms.txt convention (https://llmstxt.org)
export async function getLlmsTxt() {
  let listed = new Set<string>()
  let sections = await Promise.all(
    navigation.map(async (section) => {
      let items = await Promise.all(
        section.links.map((link) => {
          if (/^https?:/.test(link.href)) {
            return `- [${link.title}](${link.href})`
          }
          listed.add(link.href)
          return linkItem(link.href.split('/').filter(Boolean), link.title)
        }),
      )
      return `## ${section.title}\n\n${items.join('\n')}`
    }),
  )

  let slugs = await getLlmsSlugs()
  let others = await Promise.all(
    slugs
      .filter((slug) => slug.length > 0 && !listed.has(`/${slug.join('/')}`))
      .map((slug) => linkItem(slug)),
  )
  if (others.length > 0) {
    sections.push(`## Optional\n\n${others.sort().join('\n')}`)
  }

  sections.push(
    [
      '## Further Resources\n',
      '- [API reference](https://developers.inkdrop.app/): Customize and create your own plugins',
      '- [User forum](https://forum.inkdrop.app/): Join discussions, get help, and share app insights',
      '- [Plugins](https://my.inkdrop.app/plugins): Extend Inkdrop with community plugins',
    ].join('\n'),
  )

  return [
    '# Inkdrop Documentation',
    '> Official documentation for Inkdrop - a Markdown note-taking app built for developers who think in code. Features end-to-end encryption, issue-driven note-taking methodology, and extensibility through plugins.',
    `Every page is available as Markdown by appending \`.md\` to its URL. The full documentation in a single file: ${SITE_URL}/llms-full.txt`,
    `- [Home](${markdownUrl([])})`,
    ...sections,
  ]
    .join('\n\n')
    .concat('\n')
}

// Every page's Markdown concatenated into a single document
export async function getLlmsFullTxt() {
  let slugs = await getLlmsSlugs()
  let pages = await Promise.all(
    slugs
      .sort((a, b) => a.join('/').localeCompare(b.join('/')))
      .map(getPageMarkdown),
  )
  return pages.join('\n---\n\n')
}
