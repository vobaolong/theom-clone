import React from 'react'

export const CtaSection: React.FC = () => {
  return (
    <section
      className='relative flex flex-col items-center justify-center text-center py-16 md:py-44.5 bg-cover bg-no-repeat bg-center'
      aria-labelledby='cta-title'
      style={{
        backgroundImage: 'url("/assets/images/image-02.png")'
      }}
    >
      <div className='absolute inset-0 bg-[#523C14A3]' />
      <div className='relative z-10 px-4'>
        <h2
          id='cta-title'
          className='text-white text-[36px] md:text-[48px] font-mtdalatsans'
        >
          Đặt lịch hẹn chữa lành
        </h2>
        <p className='mt-4 text-white text-[14px] md:text-[20px] max-w-[320px] md:max-w-3xl mx-auto'>
          Đến The OM Lounge để xả stress và làm mới mình. Vẻ đẹp bắt đầu từ
          những điều nhỏ nhất và lan tỏa đến cả tâm hồn.
        </p>
        <div className='pt-10'>
          <a href='/vi/service/'>
            <button
              type='button'
              className='inline-flex items-center justify-center gap-3 font-medium transition-colors duration-200 cursor-pointer bg-white text-brown-0 hover:bg-[#FCE48C] hover:text-[#824C08] px-5 py-3 text-[14px] md:text-[16px]'
              aria-label='Đặt lịch hẹn tại The OM Lounge'
            >
              <span className='inline-flex items-center'>TRẢI NGHIỆM NGAY</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
