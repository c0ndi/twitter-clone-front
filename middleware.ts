import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
   if (request.nextUrl.pathname.startsWith('/')) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
         method: 'GET',
         credentials: 'include',
         headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_API_URL}` }
      })

      return NextResponse.json({ data: await res.json()})
   }
}
export const config = {
   matcher: '/',
}