'use client'

import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Testimonial {
  id: string
  name: string
  role?: string
  text: string
  image: string
  avatar: string
}

interface TestimonialsSectionProps {
  items?: Testimonial[]
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Thuỳ Đỗ',
    text: 'Bộ nail thì khỏi chê luôn, chất lượng dịch vụ tuyệt vời. Mình cảm thấy như được chăm sóc tận tình và rà...',
    image: '/assets/images/pedicure.png',
    avatar: '/assets/images/image-01.png',
  },
  {
    id: '2',
    name: 'John Doe',
    text: 'Không gian sang trọng, nhân viên thân thiện. Mỗi lần ghé mình đều rất hài lòng.',
    image: '/assets/images/pedicure.png',
    avatar: '/assets/images/image-02.png',
  },
  {
    id: '3',
    name: 'Jane Smith',
    text: 'Trải nghiệm tuyệt vời, chắc chắn sẽ quay lại thường xuyên.',
    image: '/assets/images/pedicure.png',
    avatar: '/assets/images/image-03.png',
  },
]

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  items = DEFAULT_TESTIMONIALS,
}) => {
  return (
    <section
      className='relative py-12 md:py-24'
      aria-labelledby='testimonials-title'
      style={{
        backgroundImage:
          'linear-gradient(175.08deg, rgba(129, 105, 75, 0.2) 3.96%, rgb(97, 79, 56) 78.5%), url("/assets/images/image-02.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className='relative z-10'>
        <div className='text-center mb-12 md:mb-16'>
          <div className='text-white text-[12px] md:text-[20px] lg:text-[24px] font-normal md:leading-16 lg:leading-18 tracking-[0.2em] uppercase'>
            NHẬN XÉT TỪ
          </div>
          <h2
            id='testimonials-title'
            className='text-white text-[32px] md:text-[56px] lg:text-[72px] font-mtdalatsans font-normal leading-8 md:leading-16 lg:leading-18'
          >
            Khách Hàng
          </h2>
        </div>

        <div className='max-w-6xl mx-auto px-4'>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className='testimonials-swiper pb-12'
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <article className='bg-transparent'>
                  <div className='flex flex-col h-full'>
                    {/* Main image */}
                    <div className='w-full aspect-4/3 relative overflow-hidden rounded-lg mb-6'>
                      <Image
                        alt={item.name}
                        src={item.image}
                        fill
                        className='object-cover'
                      />
                    </div>

                    {/* Content */}
                    <div className='flex gap-4 items-start'>
                      {/* Avatar */}
                      <div className='shrink-0'>
                        <Image
                          alt={`${item.name} avatar`}
                          width={60}
                          height={60}
                          className='w-12 h-12 md:w-15 md:h-15 rounded-full object-cover'
                          src={item.avatar}
                        />
                      </div>

                      {/* Text content */}
                      <div className='flex flex-col flex-1 min-w-0'>
                        <h3 className='text-white text-[16px] md:text-[20px] font-bold leading-tight mb-2'>
                          {item.name}
                        </h3>
                        <p className='text-white text-[14px] md:text-[16px] font-normal leading-relaxed mb-3 line-clamp-3'>
                          {item.text}
                        </p>
                        <button
                          type='button'
                          className='text-[#BC978C] underline text-[14px] md:text-[16px] w-fit transition-colors duration-200 hover:text-[#D8B7A9] self-start'
                        >
                          Xem thêm
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
