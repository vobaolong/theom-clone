import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className='relative py-12 md:py-16 bg-[#291e0a] overflow-hidden'>
      <div className='px-3 md:px-10 lg:px-14 xl:px-20'>
        <div className='absolute -top-2 -right-6'>
          <Image
            alt=''
            loading='lazy'
            width={160}
            height={160}
            className='size-40'
            src='/assets/flower.svg'
          />
        </div>
        <div className='flex flex-col gap-12 md:flex-row md:gap-16'>
          <div className='flex items-start gap-2.5 md:w-[45%]'>
            <Image
              alt='logo'
              loading='lazy'
              width={297}
              height={96}
              className='shrink-0 w-auto h-24'
              src='/assets/logo.svg'
            />
          </div>
          <div className='grid grid-cols-2 gap-10'>
            <div className='flex flex-col gap-12 md:gap-24'>
              <div>
                <div className='flex items-center gap-3 text-[#B19879] text-[14px] mb-8'>
                  <div className='flex gap-1'>
                    <span className='size-2 bg-[#B19879] rounded-full'></span>
                    <span className='size-2 rounded-full border border-[#B19879]'></span>
                  </div>
                  <span className=''>SITEMAP</span>
                </div>
                <div className='flex flex-col gap-4 font-mtdalatsans text-[28px] leading-[120%] tracking-[-0.02em] text-[#F5EAD6]'>
                  <Link
                    href='/vi/'
                    className='transition-colors duration-300 hover:text-[#e1c084]'
                  >
                    Trang chủ
                  </Link>
                  <Link
                    href='/vi/about/'
                    className='transition-colors duration-300 hover:text-[#e1c084]'
                  >
                    Giới thiệu
                  </Link>
                  <Link
                    href='/vi/service/'
                    className='transition-colors duration-300 hover:text-[#e1c084]'
                  >
                    Dịch vụ
                  </Link>
                </div>
              </div>
              <div>
                <div className='flex items-center gap-3 text-[#B19879] text-[14px] mb-8'>
                  <div className='flex gap-1'>
                    <span className='size-2 bg-[#B19879] rounded-full'></span>
                    <span className='size-2 rounded-full border border-[#B19879]'></span>
                  </div>
                  <span className=''>LIÊN HỆ</span>
                </div>
                <div className='flex flex-col gap-4 font-mtdalatsans- text-[14px] leading-[120%] tracking-[-0.02em] text-[#F5EAD6]'>
                  <div>+84 89 812 12 97</div>
                  <div className='mt-2 min-w-52'>
                    6 Đường G, Phú Mỹ, Quận 7, TP Hồ Chí Minh <br /> (gần
                    Crescent Mall)
                  </div>
                  <div className='mt-2 grid grid-cols-2 text-[#F5EAD6] w-60.75'>
                    <div className='truncate'>Thứ 2 - Thứ 6:</div>
                    <div className='text-right'>09:00 - 19:00</div>
                    <div className='truncate'>Thứ 7 - Chủ nhật:</div>
                    <div className='text-right'>09:00 - 20:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <div
                className='pt-11.5 font-mtdalatsans font-normal text-[28px] leading-[120%] tracking-[-0.02em] text-[#F5EAD6]'
                style={{
                  fontFamily: 'MTDalatSans, Arial, Helvetica, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                }}
              >
                <p className='mb-4 cursor-pointer transition-colors duration-300 hover:text-[#e1c084]'>
                  <Link href='/vi/blog/'>Tin tức</Link>
                </p>
                <p className='cursor-pointer transition-colors duration-300 hover:text-[#e1c084]'>
                  <Link href='/vi/contact/'>Liên hệ</Link>
                </p>
              </div>
              <div className='hidden md:block mt-35.5 relative w-fit'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-51'>
                  <Image
                    alt='shape icon'
                    loading='lazy'
                    width={254}
                    height={168}
                    className='w-auto h-42 object-contain'
                    src='/assets/shape.svg'
                  />
                </div>
                <button className='px-5 py-3 text-[#FCE48C] text-[14px] font-semibold transition-colors duration-200 hover:text-white'>
                  Đặt lịch ngay
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 flex items-center justify-between md:hidden'>
          <div className='flex items-center gap-7 text-[#E5E3DC]'>
            <span className='inline-flex cursor-pointer transition-colors duration-300 hover:text-[#e1c084]'>
              <Image
                alt='facebook icon'
                loading='lazy'
                width={28}
                height={28}
                className='w-7 h-7 object-cover'
                src='/assets/facebook.svg'
              />
            </span>
            <span className='inline-flex cursor-pointer transition-colors duration-300 hover:text-[#e1c084]'>
              <Image
                alt='tiktok icon'
                loading='lazy'
                width={28}
                height={28}
                className='w-7 h-7 object-cover'
                src='/assets/tiktok.svg'
              />
            </span>
            <span className='inline-flex cursor-pointer transition-colors duration-300 hover:text-[#e1c084]'>
              <Image
                alt='zalo icon'
                loading='lazy'
                width={28}
                height={28}
                className='w-7 h-7 object-cover'
                src='/assets/zalo.svg'
              />
            </span>
          </div>
          <div className='md:hidden relative w-fit'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-33.5'>
              <Image
                alt=''
                loading='lazy'
                width={134}
                height={134}
                src='/image/home/shape.svg'
              />
            </div>
            <button className='px-5 py-3 text-[#FCE48C] text-[14px] font-semibold transition-colors duration-200 hover:text-white'>
              Đặt lịch ngay
            </button>
          </div>
        </div>
        <div className='mt-12 flex items-center justify-between'>
          <div className='hidden md:flex items-center gap-7 text-[#E5E3DC]'>
            <span className='inline-flex size-7 cursor-pointer transition-colors duration-300 hover:text-[#e1c084]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
              >
                <path
                  d='M10.5547 6.84251V10.0485H8.20508V13.9685H10.5547V25.6188H15.3777V13.9697H18.6152C18.6152 13.9697 18.9186 12.0902 19.0656 10.0345H15.3976V7.35351C15.3976 6.95334 15.9226 6.41434 16.4429 6.41434H19.0726V2.33334H15.4979C10.4346 2.33334 10.5547 6.25684 10.5547 6.84251Z'
                  fill='currentColor'
                />
              </svg>
            </span>
            <span className='inline-flex size-7 cursor-pointer transition-colors duration-300 hover:text-[#e1c084]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
              >
                <path
                  d='M18.6667 9.61933V18.0835C18.6663 19.6585 18.1756 21.1944 17.2625 22.4778C16.3495 23.7612 15.0594 24.7285 13.5716 25.2453C12.0838 25.7621 10.4719 25.8028 8.95986 25.3618C7.44782 24.9207 6.11063 24.0198 5.13396 22.7841C4.15729 21.5485 3.58961 20.0393 3.50976 18.4663C3.4299 16.8933 3.84182 15.3344 4.68833 14.0062C5.53483 12.6779 6.77391 11.6462 8.23351 11.0543C9.69311 10.4624 11.3008 10.3397 12.8333 10.7032V14.3933C12.034 14.0142 11.1331 13.9049 10.2662 14.0819C9.39935 14.259 8.61345 14.7128 8.02679 15.3751C7.44012 16.0373 7.08443 16.8722 7.01324 17.7541C6.94206 18.636 7.15922 19.5171 7.63206 20.2649C8.10491 21.0127 8.80784 21.5867 9.63507 21.9005C10.4623 22.2143 11.3691 22.251 12.2189 22.0049C13.0688 21.7589 13.8157 21.2434 14.3473 20.5362C14.8789 19.829 15.1665 18.9682 15.1667 18.0835V2.3335H18.6667C18.6667 3.88059 19.2813 5.36432 20.3752 6.45829C21.4692 7.55225 22.9529 8.16683 24.5 8.16683V11.6668C22.3789 11.6696 20.3207 10.9472 18.6667 9.61933Z'
                  fill='currentColor'
                />
              </svg>
            </span>
            <span className='inline-flex size-7 cursor-pointer transition-colors duration-300 hover:text-[#e1c084]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
              >
                <g clipPath='url(#clip0_6352_17263_desktop)'>
                  <mask
                    id='path-1-inside-1_6352_17263_desktop'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12.7577 0.0933838H15.2312C18.6284 0.0933838 20.6136 0.59234 22.3758 1.53717C24.1381 2.482 25.5288 3.86209 26.463 5.62438C27.4078 7.38665 27.9068 9.37185 27.9068 12.769V15.2319C27.9068 18.629 27.4078 20.6142 26.463 22.3765C25.5182 24.1388 24.1381 25.5295 22.3758 26.4637C20.6136 27.4086 18.6284 27.9075 15.2312 27.9075H12.7683C9.37118 27.9075 7.38598 27.4086 5.62372 26.4637C3.86147 25.5189 2.47077 24.1388 1.53656 22.3765C0.591724 20.6142 0.0927734 18.629 0.0927734 15.2319V12.769C0.0927734 9.37185 0.591724 7.38665 1.53656 5.62438C2.48138 3.86209 3.86147 2.47139 5.62372 1.53717C7.3754 0.59234 9.37118 0.0933838 12.7577 0.0933838ZM4.35653 24.41C5.65736 24.5538 7.28371 24.1828 8.43849 23.6222C13.4529 26.3938 21.2913 26.2614 26.036 23.225C26.22 22.949 26.3919 22.6619 26.5515 22.3643C27.4998 20.5956 28.0005 18.6032 28.0005 15.1937V12.7218C28.0005 9.31224 27.4998 7.31982 26.5515 5.55113C25.6139 3.78244 24.2181 2.39732 22.4494 1.44904C20.6807 0.500774 18.6883 0 15.2788 0H12.7962C9.89236 0 8.00729 0.365542 6.42344 1.0634C6.33686 1.14093 6.25191 1.21978 6.16875 1.29996C1.522 5.77937 1.16878 15.4892 5.10906 20.7638C5.11345 20.7716 5.11832 20.7794 5.12367 20.7874C5.731 21.6824 5.14498 23.2486 4.22867 24.1649C4.07951 24.3034 4.13278 24.3887 4.35653 24.41Z'
                    />
                  </mask>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12.7577 0.0933838H15.2312C18.6284 0.0933838 20.6136 0.59234 22.3758 1.53717C24.1381 2.482 25.5288 3.86209 26.463 5.62438C27.4078 7.38665 27.9068 9.37185 27.9068 12.769V15.2319C27.9068 18.629 27.4078 20.6142 26.463 22.3765C25.5182 24.1388 24.1381 25.5295 22.3758 26.4637C20.6136 27.4086 18.6284 27.9075 15.2312 27.9075H12.7683C9.37118 27.9075 7.38598 27.4086 5.62372 26.4637C3.86147 25.5189 2.47077 24.1388 1.53656 22.3765C0.591724 20.6142 0.0927734 18.629 0.0927734 15.2319V12.769C0.0927734 9.37185 0.591724 7.38665 1.53656 5.62438C2.48138 3.86209 3.86147 2.47139 5.62372 1.53717C7.3754 0.59234 9.37118 0.0933838 12.7577 0.0933838ZM4.35653 24.41C5.65736 24.5538 7.28371 24.1828 8.43849 23.6222C13.4529 26.3938 21.2913 26.2614 26.036 23.225C26.22 22.949 26.3919 22.6619 26.5515 22.3643C27.4998 20.5956 28.0005 18.6032 28.0005 15.1937V12.7218C28.0005 9.31224 27.4998 7.31982 26.5515 5.55113C25.6139 3.78244 24.2181 2.39732 22.4494 1.44904C20.6807 0.500774 18.6883 0 15.2788 0H12.7962C9.89236 0 8.00729 0.365542 6.42344 1.0634C6.33686 1.14093 6.25191 1.21978 6.16875 1.29996C1.522 5.77937 1.16878 15.4892 5.10906 20.7638C5.11345 20.7716 5.11832 20.7794 5.12367 20.7874C5.731 21.6824 5.14498 23.2486 4.22867 24.1649C4.07951 24.3034 4.13278 24.3887 4.35653 24.41Z'
                    fill='currentColor'
                  />
                  <path
                    d='M11.5155 9.52002H6.06952V10.6878H9.84879L6.12255 15.3058C6.00579 15.4756 5.9209 15.6349 5.9209 15.9958V16.2931H11.059C11.3138 16.2931 11.5262 16.0808 11.5262 15.826V15.1996H7.55576L11.059 10.8045C11.1121 10.7409 11.2076 10.6241 11.2501 10.571L11.2714 10.5392C11.4731 10.2419 11.5155 9.98712 11.5155 9.67928V9.52002Z'
                    fill='currentColor'
                  />
                  <path
                    d='M18.4475 16.2931H19.2225V9.52002H18.0547V15.9003C18.0547 16.1126 18.2245 16.2931 18.4475 16.2931Z'
                    fill='currentColor'
                  />
                  <path
                    d='M14.4558 11.0277C12.9907 11.0277 11.8018 12.2167 11.8018 13.6817C11.8018 15.1467 12.9907 16.3357 14.4558 16.3357C15.9208 16.3357 17.1098 15.1467 17.1098 13.6817C17.1204 12.2167 15.9314 11.0277 14.4558 11.0277ZM14.4558 15.2423C13.5959 15.2423 12.8952 14.5416 12.8952 13.6817C12.8952 12.8218 13.5959 12.1212 14.4558 12.1212C15.3156 12.1212 16.0163 12.8218 16.0163 13.6817C16.0163 14.5416 15.3263 15.2423 14.4558 15.2423Z'
                    fill='currentColor'
                  />
                  <path
                    d='M22.6723 10.9852C21.1966 10.9852 19.9971 12.1849 19.9971 13.6605C19.9971 15.1361 21.1966 16.3357 22.6723 16.3357C24.1479 16.3357 25.3475 15.1361 25.3475 13.6605C25.3475 12.1849 24.1479 10.9852 22.6723 10.9852ZM22.6723 15.2423C21.8018 15.2423 21.1011 14.5416 21.1011 13.6711C21.1011 12.8006 21.8018 12.0999 22.6723 12.0999C23.5428 12.0999 24.2435 12.8006 24.2435 13.6711C24.2435 14.5416 23.5428 15.2423 22.6723 15.2423Z'
                    fill='currentColor'
                  />
                  <path
                    d='M16.4954 16.293H17.1218V11.176H16.0283V15.8365C16.0283 16.0807 16.2406 16.293 16.4954 16.293Z'
                    fill='currentColor'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_6352_17263_desktop'>
                    <rect width='28' height='28' fill='currentColor' />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className='text-[#625B5A] text-[10px] font-medium'>
            &copy; 2025 — Copyright The OM Lounge. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
