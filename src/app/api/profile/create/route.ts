// app/api/profile/create/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from 'lib/prisma'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const token = authHeader.split(' ')[1]

  console.log('JWT_SECRET:', process.env.JWT_SECRET)
    console.log('Received token:', token)

  try {
    const decoded = jwt.verify(token, SECRET) as { userId: string }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const body = await req.json()

    await prisma.userProfile.upsert({
      where: { userId: user.id },
      update: body,
      create: {
        userId: user.id,
        ...body,
      },
    })

    return NextResponse.json({ message: 'Profile created or updated successfully' }, { status: 200 })
  } catch (error) {
    console.error('❌ Error in /api/profile/create:', error)
    return NextResponse.json(
      { error: 'Internal Server Error', message: (error as any).message },
      { status: 500 }
    )
  }
}
