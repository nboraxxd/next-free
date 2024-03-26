export async function POST(request: Request) {
  const res = await request.json()
  const sessionToken = res.payload?.data?.token

  if (!sessionToken) {
    return Response.json(
      { message: 'Session token not found' },
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }

  return Response.json(res.payload, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `session-token=${sessionToken}; Path=/; HttpOnly`,
    },
  })
}
