import type { ServiceResponse } from '@/types/service'
import { servicesMock } from '@/lib/mock/services'

export async function getServices(): Promise<ServiceResponse> {
  return servicesMock
}
