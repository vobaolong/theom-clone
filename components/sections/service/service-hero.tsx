import React from 'react'

interface ServiceHeroProps {
  title?: string
  backgroundImage?: string
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  title = 'Dịch Vụ',
  backgroundImage = '/assets/images/image-01.png',
}) => {
  return (
    <section aria-labelledby='service-header'>
      <div
        className='relative h-62.5 lg:h-150 w-full bg-center bg-cover'
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className='absolute inset-0 bg-[#282626]/35' />
        <div className='absolute inset-0 bg-linear-to-b to-[#614F38] from-[#A4782833]' />
        <h1
          id='service-header'
          className='font-mtdalatsans absolute left-1/2 -translate-x-1/2 bottom-4 text-center text-[#E5E3DC] font-normal capitalize text-[48px] md:text-[72px] xl:text-[128px] leading-none'
        >
          {title}
        </h1>
      </div>
      <div className='relative w-full'>
        <div
          className='absolute top-0 right-0 left-0 h-250 bg-linear-to-b from-[#614F38] via-[#A4782899] to-[rgba(244,244,243,0)]'
          aria-hidden='true'
        />
      </div>
    </section>
  )
}
