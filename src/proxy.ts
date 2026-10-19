import { NextResponse, type NextRequest } from 'next/server'

function quality(accept: string, type: string) {
  for (const entry of accept.split(',')) {
    const [mediaType, ...params] = entry.trim().split(';')
    if (mediaType.trim().toLowerCase() !== type) continue
    const q = params.find((param) => param.trim().startsWith('q='))
    return q ? Number(q.trim().slice(2)) : 1
  }
  return 0
}

// Agents asking for Markdown via `Accept: text/markdown` get the `.md` version
// of a page at its regular URL, while browsers keep getting HTML
export function proxy(request: NextRequest) {
  const accept = request.headers.get('accept') ?? ''
  const markdown = quality(accept, 'text/markdown')
  if (markdown === 0 || markdown < quality(accept, 'text/html')) {
    return NextResponse.next()
  }

  const response = NextResponse.rewrite(new URL(`/raw-md${request.nextUrl.pathname}`, request.url))
  response.headers.set('Vary', 'Accept')
  return response
}

export const config = {
  // Only runs for docs pages requested with `text/markdown` in the Accept
  // header, so regular page views and RSC prefetches skip the proxy entirely.
  // Next internals, route handlers and files with an extension (images, `.md`,
  // `llms.txt`, ...) are excluded.
  matcher: [
    {
      source: '/((?!_next/|raw-md|.*\\.).*)',
      has: [{ type: 'header', key: 'accept', value: '.*text/markdown.*' }],
    },
  ],
}
