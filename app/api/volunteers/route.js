import { NextResponse } from 'next/server'
import dbConnect from '../../lib/mongodb'
import Volunteer from '../../models/Volunteer'

export async function POST(request) {
  try {
    await dbConnect()
    const body = await request.json()
    
    // Validate required fields
    const { name, email, phone, role, message } = body
    if (!name || !email || !phone || !role || !message) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 })
    }

    const volunteer = await Volunteer.create(body)
    return NextResponse.json({ success: true, data: volunteer }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}