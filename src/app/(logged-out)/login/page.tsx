import Link from 'next/link'

import LoginForm from '@/components/login/login-form'

export default function Login() {
  return (
    <>
      <h1 className="flex items-center gap-2 text-2xl font-semibold">Login to Next free</h1>
      <p>Welcome back! Please login to your account.</p>
      <div className="mt-5 flex w-full max-w-96 flex-col">
        <LoginForm />
        <div className="mt-2 flex items-center justify-center gap-1">
          <span>Don&apos;t have an account?</span>
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </div>
      </div>
    </>
  )
}
