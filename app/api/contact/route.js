import { NextResponse } from 'next/server'
import dbConnect from '../../lib/mongodb'
import Contact from '../../models/Contact'

export async function POST(request) {
  try {
    await dbConnect()
    const body = await request.json()
    
    // Validate required fields
    const { name, email, subject, message } = body
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 })
    }

    const contact = await Contact.create(body)
    return NextResponse.json({ success: true, data: contact }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}