export interface ServiceItem {
  id: string
  title: string
  description?: string
  price: number
  currency: string
  sectionId: string
}

export interface ServiceSection {
  id: string
  label: string
  image: string
}

export interface ServiceResponse {
  sections: ServiceSection[]
  items: ServiceItem[]
}

export interface ServiceTab {
  id: string
  label: string
}
