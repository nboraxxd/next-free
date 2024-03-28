export async function POST(request: Request) {
  const res = await request.json()
  const sessionToken  = res.payload?.data?.token

  if (!sessionToken) {
    return Response.json({ message: 'Invalid credentials' }, { status: 401 })
  }

  return Response.json( res , { status: 200, headers: { 'Set-Cookie': `sessionToken=${sessionToken}; HttpOnly; Path=/` } })
}
