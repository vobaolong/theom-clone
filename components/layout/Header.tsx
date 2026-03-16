'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { servicesMock } from '@/lib/mock/services'
import { CartDrawer } from '@/components/cart/cart-drawer'

const navigation = [
  { name: 'Trang chủ', href: '/vi/' },
  { name: 'Giới thiệu', href: '/vi/about/' },
  { name: 'Dịch vụ', href: '/vi/service/' },
  { name: 'Blog', href: '/vi/blog/' },
  { name: 'Liên hệ', href: '/vi/contact/' },
]

// Get categories from servicesMock
const categories = servicesMock.sections.map((section) => ({
  name: section.label,
  sectionId: section.id,
  href: `/vi/service#${section.id}`,
}))

const Header = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const lastScrollYRef = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollYRef.current) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }

      setShowStickyHeader(currentScrollY > 200)
      lastScrollYRef.current = currentScrollY
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const normalizePath = (value: string) => {
    if (!value) return '/'
    if (value === '/') return value
    return value.endsWith('/') ? value.slice(0, -1) : value
  }

  const isActiveNav = (href: string) => {
    const currentPath = normalizePath(pathname)
    const targetPath = normalizePath(href)

    if (targetPath === '/vi') return currentPath === '/vi'

    return (
      currentPath === targetPath || currentPath.startsWith(`${targetPath}/`)
    )
  }

  const scrollToServiceSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return false

    const headerOffset = 110
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })

    window.history.replaceState(null, '', `#${sectionId}`)
    return true
  }

  const handleCategoryClick = (event: React.MouseEvent, sectionId: string) => {
    if (!pathname.startsWith('/vi/service')) return

    event.preventDefault()
    scrollToServiceSection(sectionId)
  }

  const languageMenu = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='transition-colors duration-200 relative text-white hover:text-white/80 px-3 py-2 text-base'>
          VIETNAM
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-white'>
        <DropdownMenuGroup>
          <DropdownMenuItem className='text-[#824c08]'>
            VIETNAM
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='text-gray-700'>ENGLISH</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  const scrollDownLanguageMenu = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='inline-flex items-center gap-1 text-[#E5E3DC] text-[12px] md:text-[14px] font-medium hover:text-[#e1c084] transition-colors'>
          VIETNAM
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3 4.5L6 7.5L9 4.5'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-white'>
        <DropdownMenuGroup>
          <DropdownMenuItem className='text-[#824c08]'>
            VIETNAM
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='text-gray-700'>ENGLISH</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  const cartButton = (
    <button
      className='inline-flex items-center justify-center gap-3 font-medium transition-colors duration-200 cursor-pointer bg-[#824C08] text-[#E5E3DC] hover:bg-[#5b4421] px-3 py-2 text-[12px] md:text-[14px] relative'
      onClick={() => setIsCartOpen(true)}
      type='button'
    >
      {cartCount > 0 ? (
        <>
          <Image
            alt='cart'
            loading='lazy'
            width={24}
            height={24}
            className='size-5'
            src='/assets/cart.svg'
          />
          <span>GIỎ HÀNG</span>
          <span className='size-5 rounded-full bg-[#E5E3DC] text-brown-0 text-[14px] font-medium inline-flex items-center justify-center text-[#824C08]'>
            {cartCount}
          </span>
        </>
      ) : (
        <span>ĐẶT LỊCH NGAY</span>
      )}
    </button>
  )

  const scrollDownCartButton = (
    <button
      className='inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 cursor-pointer bg-[#824C08] text-[#E5E3DC] hover:bg-[#5b4421] px-3 py-2 text-[12px] md:text-[14px] relative'
      onClick={() => setIsCartOpen(true)}
      type='button'
    >
      {cartCount > 0 ? (
        <>
          <Image
            alt='cart'
            loading='lazy'
            width={20}
            height={20}
            className='size-4'
            src='/assets/cart.svg'
          />
          <span>GIỎ HÀNG</span>
          <span className='size-4 rounded-full bg-[#E5E3DC] text-brown-0 text-[12px] font-medium inline-flex items-center justify-center text-[#824C08]'>
            {cartCount}
          </span>
        </>
      ) : (
        <span>ĐẶT LỊCH NGAY</span>
      )}
    </button>
  )

  return (
    <header className='relative px-3 md:px-10 lg:px-14 xl:px-20'>
      <div
        className={`fixed top-0 left-0 right-0 py-3 px-3 md:px-10 lg:px-14 xl:px-20 bg-[#614F38] transform-gpu transition-[opacity,transform,filter] duration-500 md:duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          showStickyHeader
            ? 'opacity-100 translate-y-0 blur-0 pointer-events-auto'
            : 'opacity-0 -translate-y-3 blur-[2px] pointer-events-none'
        }`}
        style={{
          zIndex: 99999999,
          isolation: 'isolate',
          willChange: 'transform, opacity, filter',
        }}
      >
        <div className='flex items-center justify-between'>
          {scrollDirection === 'down' ? (
            // Show categories when scrolling down
            <>
              <nav className='hidden md:flex items-center gap-6 lg:gap-8'>
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    onClick={(event) =>
                      handleCategoryClick(event, category.sectionId)
                    }
                    className='text-[#E5E3DC] text-[12px] lg:text-[14px] font-medium hover:text-[#e1c084] transition-colors whitespace-nowrap'
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>

              <button className='md:hidden p-1'>
                <Image
                  alt='menu'
                  loading='lazy'
                  width={28}
                  height={28}
                  className='w-7 h-7'
                  src='/image/home/icon-bar.svg'
                />
              </button>

              <div className='flex items-center gap-3 md:gap-6'>
                <div className='hidden md:block'>{scrollDownLanguageMenu}</div>
                {scrollDownCartButton}
              </div>
            </>
          ) : (
            // Show logo and navigation when scrolling up
            <>
              <Link className='cursor-pointer' href='/vi/'>
                <Image
                  alt='logo'
                  loading='lazy'
                  width={131}
                  height={48}
                  className='shrink-0 w-auto h-12'
                  src='/assets/logo.svg'
                />
              </Link>

              <div className='absolute left-1/2 -translate-x-1/2 hidden md:block'>
                <nav className='hidden md:flex items-center justify-center gap-15.5'>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      className={
                        isActiveNav(item.href)
                          ? 'text-[16px] font-semibold leading-[150%] text-[#e1c084] border-b-[0.2px] border-[#e1c084] pb-2 cursor-pointer'
                          : 'text-base font-medium text-white/70 cursor-pointer pb-2'
                      }
                      href={item.href}
                    >
                      <p className='truncate'>{item.name}</p>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className='flex items-center gap-3 md:gap-8'>
                <div className='hidden md:block'>{scrollDownLanguageMenu}</div>
                {scrollDownCartButton}
                <button className='md:hidden p-1'>
                  <Image
                    alt='menu'
                    loading='lazy'
                    width={28}
                    height={28}
                    className='w-7 h-7'
                    src='/image/home/icon-bar.svg'
                  />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <>
        <div className='flex items-center justify-between py-4 md:py-12 xl:py-12 bg-transparent'>
          <div className='hidden md:block'>{languageMenu}</div>

          <div className='hidden md:block absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2'>
            <Link className='cursor-pointer' href='/vi/'>
              <div className='flex items-center h-fit gap-3'>
                <Image
                  alt='logo'
                  loading='lazy'
                  width={206}
                  height={80}
                  className='shrink-0 w-51.5 h-auto'
                  src='/assets/logo.svg'
                />
              </div>
            </Link>
          </div>

          <div className='flex items-center gap-3'>
            {cartButton}
            <button className='md:hidden p-1'>
              <Image
                alt='menu'
                loading='lazy'
                width={28}
                height={28}
                className='w-7 h-7'
                src='/image/home/icon-bar.svg'
              />
            </button>
          </div>
        </div>

        <nav className='mt-2 hidden md:flex items-center justify-center gap-15.5'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              className={
                isActiveNav(item.href)
                  ? 'text-[16px] font-semibold leading-[150%] text-[#e1c084] border-b-[0.2px] border-[#e1c084] pb-2 cursor-pointer'
                  : 'text-base font-medium text-white/70 cursor-pointer pb-2'
              }
              href={item.href}
            >
              <p className='truncate'>{item.name}</p>
            </Link>
          ))}
        </nav>
      </>

      <CartDrawer
        open={isCartOpen}
        onOpenChange={setIsCartOpen}
        onItemCountChange={setCartCount}
      />
    </header>
  )
}

export default Header
