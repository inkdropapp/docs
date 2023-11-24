'use client'
import { useEffect } from 'react'
import Link from 'next/link'

type Props = {
  topicId: number
}

export function DiscourseComments(props: Props) {
  const { topicId } = props

  useEffect(() => {
    window.DiscourseEmbed = {
      discourseUrl: 'https://forum.inkdrop.app/',
      topicId,
    }
    console.log('params:', window.DiscourseEmbed)

    var d = document.createElement('script')
    d.type = 'text/javascript'
    d.async = true
    d.src = window.DiscourseEmbed.discourseUrl + 'javascripts/embed.js'
    const el =
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]
    el.appendChild(d)
  }, [topicId])

  return (
    <div>
      <h2>Comments</h2>
      <div className="mb-4">
        Got any question about this page? Leave a comment on{' '}
        <Link href={`https://forum.inkdrop.app/t/${topicId}`} target="_blank">
          the user forum here
        </Link>
        .
      </div>
      <div
        id="discourse-comments"
        className="mb-4 overflow-hidden rounded-lg shadow-lg"
      ></div>
    </div>
  )
}
