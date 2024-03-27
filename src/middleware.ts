import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const privatePaths = ['/me', '/profile']
const authPaths = ['/login', '/register']

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const sesstionToken = request.cookies.get('session-token')?.value
  if (privatePaths.some((privatePath) => pathname.startsWith(privatePath)) && !sesstionToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (authPaths.some((authPath) => pathname.startsWith(authPath)) && sesstionToken) {
    return NextResponse.redirect(new URL('/me', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/me', '/profile', '/login', '/register'],
}
