import { type Node } from '@markdoc/markdoc'

import { DocsHeader } from '@/components/DocsHeader'
import { PrevNextLinks } from '@/components/PrevNextLinks'
import { Prose } from '@/components/Prose'
import { TableOfContents } from '@/components/TableOfContents'
import { collectSections } from '@/lib/sections'
import Image from 'next/image'
import { CalloutToForum } from './CalloutToForum'
import { YouTubeVideo } from './YouTubeVideo'

export function DocsLayout({
  children,
  frontmatter: { title, parentPage, coverImage, youtubeVideoId },
  nodes,
}: {
  children: React.ReactNode
  frontmatter: {
    title?: string
    parentPage?: string
    coverImage?: string
    youtubeVideoId?: string
  }
  nodes: Array<Node>
}) {
  let tableOfContents = collectSections(nodes)

  return (
    <>
      <div className="max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
        <article>
          <DocsHeader title={title} parentPage={parentPage} />
          <div>
            {youtubeVideoId ? (
              <YouTubeVideo videoId={youtubeVideoId} />
            ) : (
              coverImage && (
                <Image
                  src={coverImage}
                  alt="cover image"
                  width={1024}
                  height={576}
                  className="mb-6 rounded-lg border"
                />
              )
            )}
          </div>
          <Prose>
            {children}
            <CalloutToForum />
          </Prose>
        </article>
        <PrevNextLinks />
      </div>
      <TableOfContents tableOfContents={tableOfContents} />
    </>
  )
}
