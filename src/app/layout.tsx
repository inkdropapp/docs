import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import Fathom from '../components/Fathom'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import '@/styles/page.css'
import { Redirects } from '@/lib/redirects'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Inkdrop User Manual',
    default: 'Inkdrop User Manual',
  },
  description:
    'Help, tutorials & documentation on how to unleash your coding productivity with Inkdrop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preconnect"
          href="https://use.typekit.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://p.typekit.net/p.css?s=1&k=atg0zvr&ht=tk&f=32895.32897.32899.32902&a=46188681&app=typekit&e=css"
        />
      </head>
      <body className="flex min-h-full bg-white dark:bg-slate-900">
        <Fathom />
        <Redirects />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
