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
  frontmatter: { title, coverImage, youtubeVideoId },
  nodes,
}: {
  children: React.ReactNode
  frontmatter: { title?: string; coverImage?: string; youtubeVideoId?: string }
  nodes: Array<Node>
}) {
  let tableOfContents = collectSections(nodes)

  return (
    <>
      <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
        <article>
          <DocsHeader title={title} />
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
