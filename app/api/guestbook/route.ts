import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const json = await request.json()
  const name = json.name
  const message = json.message
  const hide = json.hide
  // TODO add security validations to avoid injections and XSS
  // TODO add save to DB
  return Response.json({ name, message, hide })
}

// TODO expose API to stream last 10 saved entries