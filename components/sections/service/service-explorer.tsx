'use client'

import React from 'react'
import type { ServiceItem, ServiceResponse, ServiceSection, ServiceTab } from '@/types/service'
import { ServiceTabs } from '@/components/sections/service/service-tabs'
import { ServiceCategorySection } from '@/components/sections/service/service-category-section'

interface ServiceExplorerProps {
  data: ServiceResponse
  scrollOffset?: number
}

function normalizeText(value: string) {
  return value.trim().toLowerCase()
}

function buildItemsBySectionId(items: ServiceItem[]) {
  const map = new Map<string, ServiceItem[]>()
  for (const item of items) {
    const key = item.sectionId
    const list = map.get(key)
    if (list) list.push(item)
    else map.set(key, [item])
  }
  return map
}

function filterItems(items: ServiceItem[], query: string) {
  const q = normalizeText(query)
  if (!q) return items
  return items.filter((item) => {
    const haystack = `${item.title} ${item.description ?? ''}`
    return normalizeText(haystack).includes(q)
  })
}

export function ServiceExplorer({ data, scrollOffset = 96 }: ServiceExplorerProps) {
  const [query, setQuery] = React.useState('')
  const [activeId, setActiveId] = React.useState<string | null>(null)

  const sectionsWithItems = React.useMemo(() => {
    const itemsBySection = buildItemsBySectionId(data.items)
    return data.sections
      .map((section: ServiceSection) => {
        const sectionItems = itemsBySection.get(section.id) ?? []
        const filtered = filterItems(sectionItems, query)
        return { section, items: filtered }
      })
      .filter(({ items }) => items.length > 0)
  }, [data.items, data.sections, query])

  const tabs: ServiceTab[] = React.useMemo(
    () =>
      sectionsWithItems.map(({ section }) => ({
        id: section.id,
        label: section.label
      })),
    [sectionsWithItems]
  )

  React.useEffect(() => {
    if (!activeId && tabs.length > 0) {
      setActiveId(tabs[0].id)
      return
    }
    if (activeId && tabs.length > 0 && !tabs.some((t) => t.id === activeId)) {
      setActiveId(tabs[0].id)
    }
  }, [activeId, tabs])

  const handleTabSelect = React.useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId)
      if (!element) return

      const y = element.getBoundingClientRect().top + window.scrollY - scrollOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    },
    [scrollOffset]
  )

  React.useEffect(() => {
    if (tabs.length === 0) return

    const elements = tabs
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0))

        const topMost = visible[0]?.target
        if (topMost?.id) setActiveId(topMost.id)
      },
      {
        root: null,
        rootMargin: `-${scrollOffset}px 0px -70% 0px`,
        threshold: [0.05, 0.2, 0.4]
      }
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [tabs, scrollOffset])

  return (
    <div className='flex flex-col'>
      <ServiceTabs
        tabs={tabs}
        activeId={activeId ?? undefined}
        query={query}
        onQueryChange={setQuery}
        onTabSelect={handleTabSelect}
      />

      <div className='px-3 md:px-10 lg:px-14 xl:px-20 flex flex-col gap-20 py-12'>
        {sectionsWithItems.length === 0 ? (
          <div className='text-center text-white/90 py-16'>
            <div className='text-[24px] font-semibold'>Không tìm thấy dịch vụ phù hợp</div>
            <div className='text-[16px] text-white/70 mt-2'>
              Thử nhập từ khoá khác hoặc xoá bộ lọc tìm kiếm.
            </div>
          </div>
        ) : (
          sectionsWithItems.map(({ section, items }, index) => (
            <ServiceCategorySection
              key={section.id}
              id={section.id}
              label={section.label}
              image={section.image}
              items={items}
              imageOnLeft={index % 2 === 0}
            />
          ))
        )}
      </div>
    </div>
  )
}

