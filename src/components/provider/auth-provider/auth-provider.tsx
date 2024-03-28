'use client'

import { createContext, useContext, useState } from 'react'

interface AuthProviderProps {
  children: React.ReactNode
  initialSessionToken?: string
}

type AuthProviderState = {
  sessionToken: string
  setSessionToken: (sesstionToken: string) => void
}

const initialAuthState = {
  sessionToken: '',
  setSessionToken: () => {},
}

const AuthProviderContext = createContext<AuthProviderState>(initialAuthState)

export default function AuthProvider({ children, initialSessionToken = '' }: AuthProviderProps) {
  const [sessionToken, setSessionToken] = useState(initialSessionToken)

  return (
    <AuthProviderContext.Provider value={{ sessionToken, setSessionToken }}>{children}</AuthProviderContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthProviderContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
