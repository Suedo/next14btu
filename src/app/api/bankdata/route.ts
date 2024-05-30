import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../prisma/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const users = await prisma.bank_ref_data.findMany()
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}
