'use client'

import { usePathname } from 'next/navigation'
import { navigation } from '@/lib/navigation'
import { SvgIcon } from './SvgIcon'

export function DocsHeader({
  title,
  parentPage,
}: {
  title?: string
  parentPage?: string
}) {
  let pathname = usePathname()
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === pathname),
  )
  let parent = navigation
    .map((section) => section.links.find((link) => link.href === parentPage))
    .filter(Boolean)[0]

  if (!title && !section) {
    return null
  }

  return (
    <header className="mb-9 space-y-1">
      {section && (
        <p className="font-proxyma text-sm font-medium text-sky-500">
          {section.title}
        </p>
      )}
      {parent && (
        <p className="font-proxyma text-sm font-medium text-sky-500">
          <a href={parent.href} className="hover:underline">
            <SvgIcon name="arrow-left-1" size={10} className="mr-2" />
            {parent.title}
          </a>
        </p>
      )}
      {title && (
        <h1 className="font-proxyma text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h1>
      )}
    </header>
  )
}
