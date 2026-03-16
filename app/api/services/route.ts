import { NextResponse } from 'next/server'
import { getServices } from '@/lib/services/get-services'

export async function GET() {
  return NextResponse.json(await getServices())
}
