'use client'

import Link from 'next/link'
import { navigation } from '@/components/Layout'

export function ThumbLink({ title, href, cover }) {
  return (
    <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
      <div className="relative overflow-hidden rounded-xl items-center gap-4">
        <img src={cover} alt="Cover image" />
        <div className='p-4'>
          <h2 className="font-display text-lg text-slate-900 dark:text-white">
            <Link href={href}>
              <span className="absolute -inset-px rounded-xl" />
              {title}
            </Link>
          </h2>
        </div>
      </div>
    </div>
  )
}

export function ThumbLinks({ children, category }) {
  console.log('category:', category)
  const links = navigation[Number(category)].links
  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {children}
      {links.map(info => (
        <ThumbLink key={info.href} {...info} />
      ))}
    </div>
  )
}

