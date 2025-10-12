import { NextResponse } from 'next/server'
import dbConnect from '../../lib/mongodb'
import Program from '../../models/Program'

export async function GET() {
  try {
    await dbConnect()
    const programs = await Program.find({}).sort({ createdAt: -1 })
    return NextResponse.json({ success: true, data: programs })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    await dbConnect()
    const body = await request.json()
    const program = await Program.create(body)
    return NextResponse.json({ success: true, data: program }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}