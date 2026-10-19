import { getLlmsFullTxt } from '@/lib/markdown'

export const dynamic = 'force-static'

export async function GET() {
  return new Response(await getLlmsFullTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
