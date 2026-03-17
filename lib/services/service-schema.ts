import { z } from 'zod'

export const ServiceSectionSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  image: z.string().min(1)
})

export const ServiceItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),
  price: z.number().nonnegative(),
  currency: z.string().min(1),
  sectionId: z.string().min(1)
})

export const ServiceResponseSchema = z.object({
  sections: z.array(ServiceSectionSchema),
  items: z.array(ServiceItemSchema)
})

