'use client'

import React from 'react'
import { Search } from 'lucide-react'
import type { ServiceTab } from '@/types/service'

interface ServiceTabsProps {
  tabs: ServiceTab[]
  activeId?: string
  query: string
  onQueryChange: (value: string) => void
  onTabSelect: (id: string) => void
}

export function ServiceTabs({
  tabs,
  activeId,
  query,
  onQueryChange,
  onTabSelect,
}: ServiceTabsProps) {
  return (
    <div className='pt-6 pb-2 bg-[#614F38] md:bg-transparent md:py-12 sticky md:relative top-0'>
      <div className='px-3 md:px-10 lg:px-14 xl:px-20'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6'>
          <div
            className='order-2 md:order-1 flex items-center gap-4 md:gap-6 overflow-x-auto'
            role='tablist'
            aria-label='Danh mục dịch vụ'
          >
            {tabs.map((tab, index) => {
              const isActive = tab.id === activeId
              const isLast = index === tabs.length - 1

              return (
                <div key={tab.id} className='flex items-center gap-4 py-3'>
                  <button
                    type='button'
                    role='tab'
                    aria-selected={isActive}
                    onClick={() => onTabSelect(tab.id)}
                    className={`uppercase text-[12px] md:text-base xl:text-[24px] truncate transition-colors cursor-pointer font-medium ${
                      isActive
                        ? 'text-[#FCE48C]'
                        : 'text-white hover:text-[#FCE48C]'
                    }`}
                  >
                    {tab.label}
                  </button>
                  {!isLast && (
                    <span
                      className='h-4.5 w-px bg-[#E5E3DC]'
                      aria-hidden='true'
                    />
                  )}
                </div>
              )
            })}
          </div>

          <div className='order-1 md:order-2 w-full md:w-98'>
            <div className='flex items-center gap-3 border-b border-[#AFB3BB] pb-3 text-white'>
              <input
                placeholder='Tìm kiếm'
                className='w-full bg-transparent outline-none placeholder:text-[#AFB3BB] text-white'
                type='text'
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
              />
              <Search className='size-6' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
