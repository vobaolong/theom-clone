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
    text: 'Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích...',
    image: '/assets/images/review-pic-1.png',
    avatar: '/assets/images/cus-1.png'
  },
  {
    id: '2',
    name: 'John Doe',
    text: 'Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích...',
    image: '/assets/images/review-pic-2.png',
    avatar: '/assets/images/cus-2.png'
  },
  {
    id: '3',
    name: 'John Doe',
    text: 'Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích...',
    image: '/assets/images/review-pic-3.png',
    avatar: '/assets/images/cus-3.png'
  },
  {
    id: '4',
    name: 'Thuỳ Đỗ',
    text: 'Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích...',
    image: '/assets/images/review-pic-2.png',
    avatar: '/assets/images/cus-2.png'
  },
  {
    id: '5',
    name: 'John Doe',
    text: 'Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích...',
    image: '/assets/images/review-pic-2.png',
    avatar: '/assets/images/cus-2.png'
  },
  {
    id: '6',
    name: 'John Doe',
    text: 'Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích...',
    image: '/assets/images/review-pic-3.png',
    avatar: '/assets/images/cus-3.png'
  }
]

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  items = DEFAULT_TESTIMONIALS
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
        backgroundPosition: 'center center'
      }}
    >
      <div className='relative z-10'>
        <div className='text-center mb-12 md:mb-16'>
          <div className='text-white text-[48px] font-normal md:leading-16 lg:leading-18 tracking-[0.2em] uppercase'>
            NHẬN XÉT TỪ
          </div>
          <h2
            id='testimonials-title'
            className='text-white text-[128px] font-mtdalatsans font-normal leading-[128px]'
          >
            Khách Hàng
          </h2>
        </div>

        <div className='max-w-7xl mx-auto px-4'>
          <Swiper
            modules={[Pagination, Autoplay]}
            centeredSlides={true}
            speed={700}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className} w-6! h-6! mx-1! opacity-100! bg-transparent! border border-transparent rounded-full inline-flex! items-center justify-center transition-all duration-300 [&.swiper-pagination-bullet-active]:border-white/60! [&.swiper-pagination-bullet-active>span]:bg-white">
                  <span class="w-1.5 h-1.5 rounded-full bg-white/50 transition-colors duration-300"></span>
                </span>`
              }
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            className='testimonials-swiper pt-8 pb-16 md:pb-24 [&_.swiper-wrapper]:items-end [&_.swiper-pagination]:bottom-0! [&_.swiper-slide]:mb-12'
          >
            {items.map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`}>
                {({ isActive }) => (
                  <article
                    className={`bg-transparent transition-all duration-700 ease-in-out transform origin-bottom ${
                      isActive
                        ? 'scale-100 opacity-100'
                        : 'scale-90 md:scale-75 opacity-50'
                    }`}
                  >
                    <div className='flex flex-col h-full justify-end'>
                      {/* Main image */}
                      <div className='w-full aspect-3/4 relative overflow-hidden rounded-none mb-6'>
                        <Image
                          alt={item.name}
                          src={item.image}
                          fill
                          className='object-cover'
                        />
                      </div>

                      {/* Content */}
                      <div className='flex gap-4 items-start pb-2'>
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
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
