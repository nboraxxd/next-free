'use client'

import { setSessionToken } from '@/stores/auth-store'

interface Props {
  children: React.ReactNode
  sesstionToken?: string
}

export default function AuthProvider({ children, sesstionToken = '' }: Props) {
  setSessionToken(sesstionToken)

  return <>{children}</>
}
