'use client'

import { useEffect, useState } from 'react'

import envConfig from '@/constants/config'
import { uselAuthStore } from '@/stores/auth-store'

export default function Page() {
  const sessionToken = uselAuthStore((state) => state.sessionToken)
  const [result, setResult] = useState<{
    status: number
    payload: any
  } | null>(null)

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`, {
        headers: {
          'Content-Type': 'application/json',
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
      setResult(result)
    }

    if (sessionToken) {
      fetchData()
    }
  }, [sessionToken])

  return <div>Hello {result?.payload?.data?.name}</div>
}
