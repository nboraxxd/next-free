import { create } from 'zustand'

const initialAuthValue = {
  sessionToken: '',
}

export const uselAuthStore = create<typeof initialAuthValue>()(() => initialAuthValue)

export const setSessionToken = (sessionToken: string) => uselAuthStore.setState(() => ({ sessionToken }))
