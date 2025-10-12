import { NextResponse } from 'next/server'
import dbConnect from '../../lib/mongodb'
import Publication from '../../models/Publication'

export async function GET() {
  try {
    await dbConnect()
    const publications = await Publication.find({}).sort({ createdAt: -1 })
    return NextResponse.json({ success: true, data: publications })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    await dbConnect()
    const body = await request.json()
    const publication = await Publication.create(body)
    return NextResponse.json({ success: true, data: publication }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}