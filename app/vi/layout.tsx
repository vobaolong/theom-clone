import type { ReactNode } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ViLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className='h-62.5 lg:h-150 w-full bg-center bg-cover'
      style={{ backgroundImage: "url('/assets/images/image-01.png')" }}
    >
      <div className='absolute w-full top-0 z-50'>
        <Header />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
