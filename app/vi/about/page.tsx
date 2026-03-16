import { ServiceHero } from '@/components/sections/service/service-hero'

export default function AboutPage() {
  return (
    <>
      <ServiceHero title='Giới thiệu' />
      <section className='px-3 md:px-10 lg:px-14 xl:px-20 py-12 md:py-20'>
        <div className='max-w-3xl text-white space-y-4'>
          <p>
            The OM Lounge là không gian spa &amp; wellness nơi bạn có thể tạm
            rời khỏi nhịp sống vội vã, tận hưởng những phút giây thư giãn và
            chăm sóc bản thân trọn vẹn.
          </p>
          <p>
            Chúng tôi kết hợp dịch vụ chăm sóc móng, massage, gội đầu thư giãn
            và các liệu trình trị liệu nhẹ nhàng trong một không gian ấm cúng,
            sang trọng.
          </p>
        </div>
      </section>
    </>
  )
}
