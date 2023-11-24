'use client'
import { useEffect } from 'react'

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

  return <div id="discourse-comments"></div>
}
