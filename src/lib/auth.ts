import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET!;

export function generateToken(user: { id: string; role: string }) {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
}

export function setTokenCookie(token: string) {
  return serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
}
