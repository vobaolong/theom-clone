'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
} from '@/components/ui/drawer'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import {
  ChevronRight,
  Clock,
  MoveLeft,
  MoveRight,
  ShoppingBag,
  X,
} from 'lucide-react'

interface CartItem {
  id: string
  name: string
  image: string
  price: number
  quantity: number
  time?: string
  showCounter?: boolean
  effects?: {
    id: string
    image: string
    label: string
    quantity: number
  }[]
}

interface DateOption {
  id: string
  label: string
  date: string
}

interface TimeSlot {
  id: string
  time: string
  period: 'AM' | 'PM'
  disabled?: boolean
}

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onItemCountChange?: (count: number) => void
}

const initialItems: CartItem[] = [
  {
    id: '1',
    name: 'Sơn gel',
    image: '/assets/images/item-1.jpg',
    price: 264000,
    quantity: 1,
    time: '10',
    showCounter: true,
    effects: [
      {
        id: 'fx1',
        image: '/assets/images/item-2.jpg',
        label: 'Da beo',
        quantity: 1,
      },
      {
        id: 'fx2',
        image: '/assets/images/item-3.jpg',
        label: 'Da beo',
        quantity: 2,
      },
    ],
  },
  {
    id: '2',
    name: 'Mắt mèo',
    image: '/assets/images/item-4.jpg',
    price: 88000,
    quantity: 1,
    time: '10',
  },
  {
    id: '3',
    name: 'Sơn nhũ',
    image: '/assets/images/item-5.png',
    price: 88000,
    quantity: 1,
    time: '10',
  },
  {
    id: '4',
    name: 'Sơn gel',
    image: '/assets/images/item-6.jpg',
    price: 88000,
    quantity: 1,
    time: '10',
  },
]

const dateOptions: DateOption[] = [
  { id: 'd1', label: 'Thứ 2', date: '16/03' },
  { id: 'd2', label: 'Thứ 3', date: '17/03' },
  { id: 'd3', label: 'Thứ 4', date: '18/03' },
  { id: 'd4', label: 'Thứ 5', date: '19/03' },
  { id: 'd5', label: 'Thứ 6', date: '20/03' },
  { id: 'd6', label: 'Thứ 7', date: '21/03' },
  { id: 'd7', label: 'Chủ Nhật', date: '22/03' },
]

const timeSlots: TimeSlot[] = [
  { id: 't1', time: '09:00', period: 'AM', disabled: true },
  { id: 't2', time: '09:30', period: 'AM', disabled: true },
  { id: 't3', time: '10:00', period: 'AM', disabled: true },
  { id: 't4', time: '10:30', period: 'AM', disabled: true },
  { id: 't5', time: '11:00', period: 'AM', disabled: true },
  { id: 't6', time: '11:30', period: 'AM', disabled: true },
  { id: 't7', time: '03:30', period: 'PM' },
  { id: 't8', time: '04:00', period: 'PM' },
  { id: 't9', time: '04:30', period: 'PM' },
  { id: 't10', time: '05:00', period: 'PM' },
]

const currency = (value: number) =>
  `${value.toLocaleString('vi-VN', { maximumFractionDigits: 0 })} ₫`

export const CartDrawer = ({
  open,
  onOpenChange,
  onItemCountChange,
}: CartDrawerProps) => {
  const [step, setStep] = useState<'cart' | 'booking'>('cart')
  const [items, setItems] = useState<CartItem[]>(initialItems)
  const [selectedDateId, setSelectedDateId] = useState(dateOptions[0]?.id ?? '')
  const [selectedTimeId, setSelectedTimeId] = useState('t7')
  const [phone, setPhone] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)

  const total = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items],
  )
  const itemCount = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items],
  )

  useEffect(() => {
    if (onItemCountChange) {
      onItemCountChange(itemCount)
    }
  }, [itemCount, onItemCountChange])

  const handleSubmitBooking = () => {
    const nextErrors: { name?: string; phone?: string } = {}
    if (!customerName.trim()) {
      nextErrors.name = 'Vui lòng nhập tên khách hàng'
    }
    if (!phone.trim()) {
      nextErrors.phone = 'Vui lòng nhập số điện thoại'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setIsSuccessOpen(true)
      setItems([])
      setStep('cart')
      setCustomerName('')
      setPhone('')
      setSelectedDateId(dateOptions[0]?.id ?? '')
      setSelectedTimeId('t7')
      onOpenChange(false)
    }
  }

  const handleRemove = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }

  const handleChangeQuantity = (id: string, delta: number) => {
    setItems((current) =>
      current.map((item) => {
        if (item.id !== id) return item
        const nextQuantity = Math.max(1, Math.min(99, item.quantity + delta))
        return { ...item, quantity: nextQuantity }
      }),
    )
  }

  return (
    <>
      <Drawer
        open={open}
        onOpenChange={onOpenChange}
        direction='right'
        shouldScaleBackground={false}
      >
        <DrawerContent className='z-100000001 top-0 bottom-0 right-0 left-auto mt-0 w-full sm:w-100 h-full border-0 rounded-none p-0 bg-[#EFECE4] shadow-2xl duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'>
          <div className='relative w-full'>
            <DrawerClose
              aria-label='Đóng giỏ hàng'
              className='absolute left-2 top-1/2 -translate-y-1/2 inline-flex size-8 items-center justify-center rounded-full hover:bg-black/5'
            >
              <X className='size-4 text-[#A38B72]' />
            </DrawerClose>
            <DrawerTitle className='font-mtdalatsans text-[#824C08] py-6 border-b border-gray-200 text-center text-[28px] leading-none tracking-tight'>
              {step === 'cart' ? 'Giỏ Hàng' : 'Xác Nhận Đặt Lịch'}
            </DrawerTitle>
          </div>
          <div className='flex-1 flex flex-col min-h-0 overflow-hidden'>
            <div className='flex h-full flex-col min-h-0'>
              <div className='relative flex-1 overflow-hidden min-h-0'>
                <div
                  className='h-full flex transition-transform duration-300 w-[200%]'
                  style={{
                    transform:
                      step === 'cart' ? 'translateX(0%)' : 'translateX(-50%)',
                  }}
                >
                  <section className='w-1/2 p-4 h-full overflow-y-auto'>
                    {items.length === 0 ? (
                      <div className='h-full min-h-80 flex flex-col items-center justify-center text-center px-4'>
                        <div className='size-14 rounded-full bg-black/5 flex items-center justify-center'>
                          <ShoppingBag className='size-6 text-[#A38B72]' />
                        </div>
                        <div className='mt-4 text-[#0A0C11] font-semibold text-[18px]'>
                          Giỏ hàng trống
                        </div>
                        <div className='mt-2 text-[#6B7280] text-[14px] leading-relaxed max-w-[26ch]'>
                          Hãy chọn dịch vụ bạn muốn trải nghiệm để bắt đầu đặt
                          lịch.
                        </div>
                        <div className='mt-6 flex items-center gap-3'>
                          <DrawerClose className='inline-flex items-center justify-center px-4 py-2 border border-[#824C08] text-[#824C08] hover:bg-black/5 active:scale-[0.98]'>
                            Đóng
                          </DrawerClose>
                          <Link
                            href='/vi/service'
                            className='inline-flex items-center justify-center px-4 py-2 bg-[#824C08] text-[#E5E3DC] hover:bg-[#5b4421] active:scale-[0.98]'
                            onClick={() => onOpenChange(false)}
                          >
                            Chọn dịch vụ
                          </Link>
                        </div>
                      </div>
                    ) : (
                      items.map((item) => (
                        <div key={item.id} className='pb-6'>
                          <div className='flex gap-4 items-center'>
                            <div className='shrink-0 w-16 h-16 md:w-20 md:h-20'>
                              <Image
                                alt={item.name}
                                className='w-16 h-16 md:w-20 md:h-20 object-cover'
                                src={item.image}
                                width={80}
                                height={80}
                                unoptimized
                              />
                            </div>

                            <div className='flex-1 min-w-0 flex flex-col gap-3'>
                              <div className='flex justify-between items-start gap-2'>
                                <p className='text-[13px] md:text-sm font-semibold text-[#0A0C11]'>
                                  {item.name}
                                </p>
                                <button
                                  aria-label='Xoa dich vu'
                                  className='size-4 flex items-center justify-center text-gray-500 hover:opacity-90 active:scale-[0.96] cursor-pointer'
                                  onClick={() => handleRemove(item.id)}
                                  type='button'
                                >
                                  <X className='size-4 stroke-[1.5]' />
                                </button>
                              </div>

                              <div className='flex justify-between items-center'>
                                <p className='text-sm text-[#0A0C11]'>
                                  {currency(item.price)}
                                </p>
                                {item.effects?.length ? (
                                  <div className='inline-flex items-center gap-1 text-sm text-[#6B7280]'>
                                    <Clock className='size-3.5' />
                                    <span>
                                      {item.time ? `${item.time} phút` : ''}
                                    </span>
                                  </div>
                                ) : item.showCounter ? (
                                  <div
                                    className='inline-flex items-center border border-[#625b5a] text-[#625b5a] select-none px-2 py-2 rounded-full text-[14px]'
                                    role='spinbutton'
                                    aria-valuenow={item.quantity}
                                    aria-valuemin={1}
                                    aria-valuemax={99}
                                    aria-disabled={false}
                                  >
                                    <button
                                      type='button'
                                      aria-label='decrement'
                                      className={`flex items-center justify-center w-5 h-5 ${
                                        item.quantity <= 1
                                          ? 'opacity-40 cursor-not-allowed'
                                          : 'cursor-pointer'
                                      }`}
                                      onClick={() =>
                                        handleChangeQuantity(item.id, -1)
                                      }
                                      disabled={item.quantity <= 1}
                                    >
                                      <span className='leading-none text-base'>
                                        -
                                      </span>
                                    </button>
                                    <input
                                      inputMode='numeric'
                                      pattern='[0-9]*'
                                      className='mx-4 text-center font-medium bg-transparent outline-none w-10'
                                      aria-label='quantity'
                                      value={item.quantity}
                                      readOnly
                                    />
                                    <button
                                      type='button'
                                      aria-label='increment'
                                      className='flex items-center justify-center w-5 h-5 cursor-pointer'
                                      onClick={() =>
                                        handleChangeQuantity(item.id, 1)
                                      }
                                    >
                                      <span className='leading-none text-base'>
                                        +
                                      </span>
                                    </button>
                                  </div>
                                ) : (
                                  <div className='text-sm text-[#6B7280]'>
                                    <span className='flex items-center gap-1'>
                                      <Clock className='size-3.5' />
                                      {item.time ? `${item.time} phút` : ''}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          {item.effects?.length ? (
                            <div className='mt-3 pl-13 space-y-3'>
                              {item.effects.map((effect) => (
                                <div
                                  key={effect.id}
                                  className='flex items-center justify-between gap-2'
                                >
                                  <div className='flex items-center gap-2'>
                                    <Image
                                      alt={effect.label}
                                      className='size-10 object-cover'
                                      src={effect.image}
                                      width={40}
                                      height={40}
                                      unoptimized
                                    />
                                    <p className='text-[13px] text-[#5f6368]'>
                                      Hiệu ứng:{' '}
                                      <span className='font-semibold text-[#333]'>
                                        {effect.label}
                                      </span>
                                    </p>
                                  </div>
                                  <div className='inline-flex items-center border border-[#625b5a] text-[#625b5a] select-none px-2 py-1.5 rounded-full text-[14px]'>
                                    <span className='w-4 text-center opacity-40'>
                                      -
                                    </span>
                                    <span className='mx-3 w-4 text-center'>
                                      {effect.quantity}
                                    </span>
                                    <span className='w-4 text-center'>+</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))
                    )}
                  </section>

                  <section className='w-1/2 p-4 h-full overflow-y-auto'>
                    <div className='text-[#0A0C11]'>
                      <div className='pt-6 flex flex-col gap-5'>
                        <div className='relative'>
                          <p className='text-xs text-[#4B3E1B]'>
                            Tên khách hàng
                          </p>
                          <div className='relative'>
                            <input
                              placeholder='Nhập tên khách hàng'
                              className='w-full bg-transparent outline-none font-medium text-[16px] leading-[1.2] pt-1 pr-8'
                              type='text'
                              value={customerName}
                              onChange={(event) => {
                                setCustomerName(event.target.value)
                                if (errors.name) {
                                  setErrors((prev) => ({
                                    ...prev,
                                    name: undefined,
                                  }))
                                }
                              }}
                              aria-invalid={!!errors.name}
                            />
                          </div>
                          <div className='mt-2 h-px w-full bg-gray-300' />
                          {errors.name ? (
                            <p className='mt-1 text-xs text-red-500'>
                              {errors.name}
                            </p>
                          ) : null}
                        </div>

                        <div className='relative'>
                          <p className='text-xs text-[#4B3E1B]'>
                            Số điện thoại
                          </p>
                          <div className='relative'>
                            <input
                              placeholder='Nhập số điện thoại'
                              className='w-full bg-transparent outline-none font-medium text-[16px] leading-[1.2] pt-1 pr-8'
                              type='tel'
                              value={phone}
                              onChange={(event) => {
                                setPhone(event.target.value)
                                if (errors.phone) {
                                  setErrors((prev) => ({
                                    ...prev,
                                    phone: undefined,
                                  }))
                                }
                              }}
                              aria-invalid={!!errors.phone}
                            />
                          </div>
                          <div className='mt-2 h-px w-full bg-gray-300' />
                          {errors.phone ? (
                            <p className='mt-1 text-xs text-red-500'>
                              {errors.phone}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <div className='pt-4'>
                        <p className='text-xs text-[#4B3E1B]'>Chọn ngày</p>
                        <div className='pt-2'>
                          <div className='flex gap-3 overflow-x-auto no-scrollbar pb-2'>
                            {dateOptions.map((dateOption) => {
                              const isSelected =
                                dateOption.id === selectedDateId
                              return (
                                <button
                                  key={dateOption.id}
                                  className={`shrink-0 px-3 py-3 text-center border border-transparent ${
                                    isSelected
                                      ? 'bg-[#F6C649] text-[#1F1F1F]'
                                      : 'bg-[#E5E3DC] text-[#1F1F1F] hover:opacity-80 active:scale-[0.98] cursor-pointer'
                                  }`}
                                  style={{ minWidth: 'calc(25% - 9px)' }}
                                  onClick={() =>
                                    setSelectedDateId(dateOption.id)
                                  }
                                  type='button'
                                >
                                  <div className='font-semibold leading-5'>
                                    {dateOption.label}
                                  </div>
                                  <div className='text-xs mt-1'>
                                    {dateOption.date}
                                  </div>
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      </div>

                      <div className='pt-5'>
                        <p className='text-xs mb-2 text-[#4B3E1B]'>
                          Chọn khung giờ
                        </p>
                        <div className='grid grid-cols-4 gap-3'>
                          {timeSlots.map((timeSlot) => {
                            const isSelected = timeSlot.id === selectedTimeId
                            return (
                              <button
                                key={timeSlot.id}
                                disabled={timeSlot.disabled}
                                className={`px-2 py-3 text-center border border-transparent ${
                                  timeSlot.disabled
                                    ? 'bg-[#E5E3DC] text-[#8C929C] opacity-60 cursor-not-allowed'
                                    : isSelected
                                      ? 'bg-[#B97951] text-white'
                                      : 'bg-[#E5E3DC] text-[#1F1F1F] hover:opacity-95 active:scale-[0.98] cursor-pointer'
                                }`}
                                onClick={() => setSelectedTimeId(timeSlot.id)}
                                type='button'
                              >
                                <div className='font-semibold leading-5'>
                                  {timeSlot.time}
                                </div>
                                <div className='text-xs mt-1'>
                                  {timeSlot.period}
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className='border-t border-gray-200'>
                <div className='p-4'>
                  {step === 'cart' ? (
                    <>
                      {items.length > 0 ? (
                        <>
                          <div className='flex items-center justify-between mb-3'>
                            <p className='text-[15px] text-[#888888]'>
                              Kỹ thuật viên
                            </p>
                            <div className='flex items-center gap-2 text-[#1F1F1F]'>
                              <Image
                                alt='Kỹ thuật viên'
                                src='/assets/images/technician.png'
                                width={28}
                                height={28}
                                className='size-7 rounded-full object-cover'
                                unoptimized
                              />
                              <span className='text-base'>
                                Võ Thị Bích Phượng
                              </span>
                              <ChevronRight className='size-3 text-[#AD8B6C]' />
                            </div>
                          </div>
                          <div className='flex items-center justify-between mb-4'>
                            <p className='text-[15px]'>Tổng thanh toán</p>
                            <p className='text-[#F36363] font-semibold'>
                              {currency(total)}
                            </p>
                          </div>
                          <button
                            className='inline-flex items-center gap-3 font-medium transition-colors duration-200 cursor-pointer bg-[#824C08] text-[#E5E3DC] hover:bg-[#5b4421] px-5 py-3 text-[14px] md:text-[16px] w-full justify-between hover:opacity-90 active:scale-[0.98] active:shadow-sm'
                            type='button'
                            onClick={() => setStep('booking')}
                          >
                            <span className='inline-flex items-center'>
                              Tiếp Tục
                            </span>
                            <MoveRight className='size-6 text-[#FAF5EB]' />
                          </button>
                        </>
                      ) : (
                        <Link
                          href='/vi/service'
                          className='inline-flex items-center gap-3 font-medium transition-colors duration-200 cursor-pointer bg-[#824C08] text-[#E5E3DC] hover:bg-[#5b4421] px-5 py-3 text-[14px] md:text-[16px] w-full justify-between hover:opacity-90 active:scale-[0.98] active:shadow-sm'
                          onClick={() => onOpenChange(false)}
                        >
                          <span className='inline-flex items-center'>
                            Chọn dịch vụ
                          </span>
                          <MoveRight className='size-6 text-[#FAF5EB]' />
                        </Link>
                      )}
                    </>
                  ) : (
                    <div className='flex gap-3 justify-between'>
                      <button
                        type='button'
                        className='inline-flex items-center gap-3 font-medium transition-colors duration-200 cursor-pointer bg-[#E5E3DC] text-[#824C08] hover:bg-[#7a6648] hover:text-[#E5E3DC] border-[#824C08] border px-5 py-3 text-[14px] md:text-[16px] w-full justify-between hover:opacity-90 active:scale-[0.98] active:shadow-sm'
                        onClick={() => setStep('cart')}
                      >
                        <MoveLeft className='size-6 text-[#824C08] hover:text-[#E5E3DC]' />
                        <span className='inline-flex items-center'>
                          Quay lại
                        </span>
                      </button>
                      <button
                        className='inline-flex items-center gap-3 font-medium transition-colors duration-200 cursor-pointer bg-[#824C08] text-[#E5E3DC] hover:bg-[#5b4421] px-5 py-3 text-[14px] md:text-[16px] w-full justify-between hover:opacity-90 active:scale-[0.98] active:shadow-sm'
                        type='button'
                        onClick={handleSubmitBooking}
                      >
                        <span className='inline-flex items-center'>
                          Đặt Lịch
                        </span>
                        <MoveRight className='size-6 text-[#FAF5EB]' />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent
          showCloseButton={true}
          className='w-179.5 max-w-[92vw] sm:max-w-179.5 bg-[#FAF5EB] shadow-xl p-8 sm:p-10 border-0'
        >
          <div className='w-30 md:w-41 mx-auto -mb-8'>
            <div className='relative aspect-square overflow-hidden'>
              <Image
                alt='thành công'
                src='/assets/noti.svg'
                fill
                className='object-contain'
                unoptimized
              />
            </div>
          </div>

          <h2 className='font-mtdalatsans mt-6 text-center text-3xl md:text-[40px] leading-none tracking-[0.01em] capitalize text-[#0A0C11]'>
            Gửi Yêu Cầu Thành Công!
          </h2>
          <p className='mt-6 text-center text-[24px] leading-[1.36] text-[#715E28]'>
            Cảm ơn bạn đã đặt dịch vụ tại The OM Lounge. Chúng tôi đã nhận được
            thông tin đặt lịch từ bạn và sẽ liên hệ lại trong thời gian sớm
            nhất.
          </p>
        </DialogContent>
      </Dialog>
    </>
  )
}
