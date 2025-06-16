import { NextRequest } from "next/server"
import prisma from '@/lib/prisma'
import { isAlphanumeric } from 'validator';

export async function POST(request: NextRequest) {
  const json = await request.json()
  const name = json.name
  const message = json.message
  const hide = json.hide
  // TODO improve security validations to avoid injections and XSS
  if(isAlphanumeric(name) && isAlphanumeric(message)){
    const value = await prisma.message.create({
      data: {
        name,
        message,
        hide
      },
    });
    return Response.json({ 
      id: value.id, 
      timestamp: value.timestamp, 
      name: value.name,
      message: value.message })
  }
  // TODO add eventual error
  return Response.json({ });
}

// TODO expose API to stream last 20 entries(newest first).