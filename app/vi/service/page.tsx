import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceCategorySection } from '@/components/sections/service/service-category-section'
import type {
  ServiceItem,
  ServiceSection,
  ServiceTab
} from '@/types/service'
import { ServiceTabs } from '@/components/sections/service/service-tabs'
import { TestimonialsSection } from '@/components/sections/service/testimonials-section'
import { CtaSection } from '@/components/sections/service/cta-section'
import Image from 'next/image'
import { getServices } from '@/lib/services/get-services'

export default async function ServicePage() {
  const data = await getServices()

  const tabs: ServiceTab[] = data.sections.map((section: ServiceSection) => ({
    id: section.id,
    label: section.label
  }))

  const sectionsWithItems = data.sections
    .map((section: ServiceSection) => ({
      section,
      items: data.items.filter((item: ServiceItem) => item.sectionId === section.id)
    }))
    .filter(({ items }) => items.length > 0)

  return (
    <>
      <ServiceHero />
      <section
        className='relative pb-8 md:pb-12'
        aria-labelledby='services-title'
      >
        <div className='absolute inset-0 -z-10'>
          <Image
            alt='Dịch vụ spa & wellness tại The OM Lounge'
            className='object-cover object-center w-full h-full'
            src='/assets/images/image-02.png'
            loading='lazy'
            width={1920}
            height={1080}
          />
          <div className='absolute inset-0 bg-linear-to-t from-[#614F38] to-[#A4782899]' />
        </div>

        <ServiceTabs tabs={tabs} activeId={sectionsWithItems[0]?.section.id} />

        <div className='px-3 md:px-10 lg:px-14 xl:px-20 flex flex-col gap-20 py-12'>
          {sectionsWithItems.map(({ section, items }, index) => (
            <ServiceCategorySection
              key={section.id}
              id={section.id}
              label={section.label}
              image={section.image}
              items={items as ServiceItem[]}
              imageOnLeft={index % 2 === 0}
            />
          ))}
        </div>
      </section>

      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
