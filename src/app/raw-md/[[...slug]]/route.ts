import { getMarkdownSlugs, getPageMarkdown } from '@/lib/markdown'

// Serves each docs page as plain Markdown, e.g. `/start-guide/foo.md`.
// Requests are rewritten here from `*.md` URLs in next.config.mjs.
export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = await getMarkdownSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug?: Array<string> }> },
) {
  const { slug = [] } = await params
  const markdown = await getPageMarkdown(slug)

  return new Response(markdown, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
