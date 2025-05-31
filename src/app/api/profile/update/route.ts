import { NextResponse, NextRequest } from "next/server"
import { prisma } from "lib/prisma"
import { verifyToken } from "lib/jwt"
import jwt from "jsonwebtoken"

const SECRET = process.env.JWT_SECRET

export async function PATCH(req: NextRequest) {

   const authHeader = req.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

    const token = authHeader.split(' ')[1]

    console.log('JWT_SECRET:', process.env.JWT_SECRET)
    console.log('Received token:', token)


    try {

        if (!SECRET) {
            return NextResponse.json({ error: "JWT secret is not configured" }, { status: 500 })
        }
        const decoded = jwt.verify(token, SECRET) as { userId: string }
        const body = await req.json()

        const existing = await prisma.userProfile.findUnique({
            where: { userId: decoded.userId },

        })
        if (!existing) {
            return NextResponse.json({ error: "Profile not found" }, { status: 404 })
        }

        const updated = await prisma.userProfile.update({
            where: { userId: decoded.userId },
            data: body,
        })

        return NextResponse.json({ message: "Profile updated successfully", profile: updated }, { status: 200 })
        
    } catch (error) {
        console.error("Error updating profile:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }

}
