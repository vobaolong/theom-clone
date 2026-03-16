import { ServiceHero } from '@/components/sections/service/service-hero'
import { TestimonialsSection } from '@/components/sections/service/testimonials-section'
import { CtaSection } from '@/components/sections/service/cta-section'

export default function ViHomePage() {
  return (
    <>
      <ServiceHero title='The OM Lounge' />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
