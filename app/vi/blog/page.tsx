import { ServiceHero } from '@/components/sections/service/service-hero'

export default function BlogPage() {
  return (
    <>
      <ServiceHero title='Blog' />
      <section className='px-3 md:px-10 lg:px-14 xl:px-20 py-12 md:py-20'>
        <div className='max-w-3xl text-white space-y-4'>
          <p>
            Nơi cập nhật những chia sẻ, kinh nghiệm chăm sóc bản thân và câu
            chuyện phía sau The OM Lounge.
          </p>
          <p>
            Bạn có thể thêm danh sách bài viết thật sau – hiện tại là nội dung
            mock.
          </p>
        </div>
      </section>
    </>
  )
}
