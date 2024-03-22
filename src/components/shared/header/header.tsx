import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/shared/mode-toggle'
import { VercelLogoIcon } from '@radix-ui/react-icons'

export default function Header() {
  return (
    <header className="container flex h-[--header-height] w-full items-center justify-between border-b border-b-foreground/10">
      <Button asChild variant="ghost" className="inline-block px-2">
        <Link href="/">
          <VercelLogoIcon className="size-6" />
        </Link>
      </Button>

      <ModeToggle />
    </header>
  )
}
