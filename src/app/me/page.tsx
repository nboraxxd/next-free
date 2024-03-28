import { cookies } from 'next/headers'

import envConfig from '@/constants/config'
import { redirect } from 'next/navigation'

export default async function Me() {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')?.value

  if (!sessionToken) redirect('/login')

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

  console.log(result)

  return <div>Xin chao {result.payload.data.name}</div>
}
