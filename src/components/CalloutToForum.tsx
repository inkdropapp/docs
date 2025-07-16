'use client'
import Link from 'next/link'
import { Callout } from './Callout'

type Props = {}

export function CalloutToForum(_props: Props) {
  return (
    <Callout title='Get help'>
      <div className="mb-4">
        Got any questions about this page? Feel free to ask them on{' '}
        <Link href={`https://forum.inkdrop.app/c/help/19`} target="_blank">
          the user forum here
        </Link>
        .
      </div>
    </Callout>
  )
}
