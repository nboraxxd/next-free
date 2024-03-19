import Link from 'next/link'
import { redirect } from 'next/navigation'

const isAuth = false
export default function Home() {
  if (!isAuth) redirect('/login')

  return (
    <div>
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
