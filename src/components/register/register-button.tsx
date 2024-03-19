'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function RegisterButton() {
  const router = useRouter()

  return <Button onClick={() => router.push('/login')}>Login</Button>
}
