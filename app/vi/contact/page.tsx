import { ServiceHero } from '@/components/sections/service/service-hero'

export default function ContactPage() {
  return (
    <>
      <ServiceHero title='Liên hệ' />
      <section className='px-3 md:px-10 lg:px-14 xl:px-20 py-12 md:py-20'>
        <div className='max-w-3xl text-white space-y-4'>
          <p>
            Hãy liên hệ với The OM Lounge để đặt lịch, tư vấn dịch vụ hoặc tổ
            chức các buổi trải nghiệm riêng tư.
          </p>
          <div className='space-y-2'>
            <p>Điện thoại: +84 89 812 12 97</p>
            <p>
              Địa chỉ: 6 Đường G, Phú Mỹ, Quận 7, TP Hồ Chí Minh (gần Crescent
              Mall)
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
