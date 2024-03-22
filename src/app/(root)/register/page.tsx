import { RegisterForm } from '@/components/register'

export default function Register() {
  return (
    <>
      <h1 className="flex items-center gap-2 text-2xl font-semibold">Register with Next free</h1>
      <p>Register to access the best course to learn Next.js</p>
      <div className="mt-8 flex w-full max-w-96 flex-col">
        <RegisterForm />
      </div>
    </>
  )
}
