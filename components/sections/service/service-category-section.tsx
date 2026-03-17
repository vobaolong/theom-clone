import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import type { ServiceItem } from '@/types/service'

interface ServiceCategorySectionProps {
  id: string
  label: string
  image: string
  items: ServiceItem[]
  imageOnLeft?: boolean
}

export const ServiceCategorySection: React.FC<ServiceCategorySectionProps> = ({
  id,
  label,
  image,
  items,
  imageOnLeft = true
}) => {
  const imageColumn = (
    <div
      className={`h-full relative min-h-70 ${imageOnLeft ? 'order-1' : 'order-2'}`}
    >
      <div className='sticky top-30 max-h-[80vh] h-full'>
        <Image
          alt={`Dịch vụ ${label} tại The OM Lounge`}
          src={image}
          fill
          className='object-cover h-full'
        />
      </div>
    </div>
  )

  const listColumn = (
    <div className={imageOnLeft ? 'order-2' : 'order-1'}>
      <h3 className='font-mtdalatsans text-[#E1C084] text-[64px] leading-none capitalize mb-10'>
        {label}
      </h3>
      <ul className='flex flex-col gap-6' role='list'>
        {items.map((item) => (
          <li key={item.id} className='flex flex-col gap-3 text-white'>
            <h4 className='text-[24px] font-semibold capitalize'>
              {item.title}
            </h4>
            <p className='text-[18px] line-clamp-3 text-[#B4AA9B]'>
              {item.description}
            </p>
            <div className='flex items-center justify-between text-[#DAD7CD] text-[16px] font-semibold'>
              <div className='text-[24px] font-semibold'>
                {item.price}
                <span className='text-[16px] font-semibold'>
                  {item.currency}
                </span>
              </div>
              <button type='button' className='cursor-pointer'>
                <span className='inline-flex items-center'>
                  <Plus className='size-8 text-white' />
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <article
      className='grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16 items-start'
      id={id}
      data-service-section='true'
      data-label={label}
    >
      {imageColumn}
      {listColumn}
    </article>
  )
}
