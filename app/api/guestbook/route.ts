import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const json = await request.json()
  const name = json.name
  const message = json.message
  const hide = json.hide
  return Response.json({ name, message, hide })
}