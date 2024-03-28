'use client'

import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'

import envConfig from '@/constants/config'
import { useAuth } from '@/components/provider/auth-provider'

export default function Profile() {
  const { sessionToken } = useAuth()
  const [profile, setProfile] = useState<{
    status: number
    payload: any
  } | null>(null)

  if (!sessionToken) redirect('/login')

  useEffect(() => {
    async function fetchProfile() {
      const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`, {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      }).then(async (res) => {
        const payload = await res.json()
        const data = {
          status: res.status,
          payload,
        }

        if (!res.ok) {
          throw data
        }

        return data
      })

      setProfile(result)
    }

    fetchProfile()
  }, [sessionToken])

  return <div>Hello {profile?.payload?.data?.name}</div>
}
