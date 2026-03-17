import { ServiceHero } from '@/components/sections/service/service-hero'
import { TestimonialsSection } from '@/components/sections/service/testimonials-section'
import { CtaSection } from '@/components/sections/service/cta-section'
import Image from 'next/image'
import { getServices } from '@/lib/services/get-services'
import { ServiceExplorer } from '@/components/sections/service/service-explorer'

export default async function ServicePage() {
  const data = await getServices()

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

        <ServiceExplorer data={data} />
      </section>

      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
