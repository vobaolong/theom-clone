import type { ServiceResponse } from '@/types/service'
import { servicesMock } from '@/lib/mock/services'
import { ServiceResponseSchema } from '@/lib/services/service-schema'

export async function getServices(): Promise<ServiceResponse> {
  const baseUrl = process.env.SERVICES_API_URL

  if (!baseUrl) {
    return servicesMock
  }

  const url = new URL('/services', baseUrl)

  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch services: ${res.status} ${res.statusText}`)
  }

  const json = await res.json()
  return ServiceResponseSchema.parse(json)
}
