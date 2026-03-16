import type { ServiceResponse } from '@/lib/mock/services'
import { servicesMock } from '@/lib/mock/services'
export async function getServices(): Promise<ServiceResponse> {
  return servicesMock
}
