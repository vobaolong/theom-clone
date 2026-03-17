import { NextResponse } from 'next/server'
import { getServices } from '@/lib/services/get-services'

export async function GET() {
  try {
    return NextResponse.json(await getServices(), { status: 200 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
