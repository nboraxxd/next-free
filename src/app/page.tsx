import { ModeToggle } from '@/components/shared/mode-toggle'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ModeToggle />
      <ul className="flex flex-col gap-2">
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </div>
  )
}
