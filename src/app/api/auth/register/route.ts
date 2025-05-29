// src/app/api/auth/register/route.ts

import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { prisma } from '../../../../lib/prisma'
import { z } from 'zod'

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullName: z.string().min(2),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const result = registerSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.errors },
        { status: 400 }
      )
    }

    const { email, password, fullName } = result.data

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
      },
    })

    return NextResponse.json(
      {
        message: 'User registered successfully',
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
