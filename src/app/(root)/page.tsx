import Link from 'next/link'
import { VercelLogoIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <h1 className="flex items-center gap-2 text-2xl font-semibold">
        <VercelLogoIcon className="size-10 text-pink-500" />
        Next free
      </h1>
      <p>The best course to learn Next.js</p>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <small>or</small>
        <Button variant="outline" asChild>
          <Link href="/register">Register</Link>
        </Button>
      </div>
    </>
  )
}
