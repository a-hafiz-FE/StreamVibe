
import CardText from '../../../Components/CardText'
import CustomCarousel from './CustomCarousel'

const CategorySection = () => {
  return (
    <section className='relative flex flex-col gap-15 py-20'>
      <section className='flex gap-20'>
        <CardText Ctitle="Explore our wide variety of categories" Cdesc="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new" />

        {/* <section className='flex flex-1 justify-end'>
          <section className='flex p-3 gap-3 border box-border border-[#1F1F1F] bg-[#0F0F0F] rounded-[10px] items-center'>
            <Image imgSrc='/src/assets/Left.svg' customClass='p-2.5 border box-border rounded-md border-[#1F1F1F] bg-[#1A1A1A] size-11' />
            <section className='flex gap-1'>
              <span className='w-4.5 h-1 rounded-[100px] bg-[#E50000]' />
              <span className='w-3.5 h-1 rounded-[100px] bg-[#333333]' />
              <span className='w-3.5 h-1 rounded-[100px] bg-[#333333]' />
              <span className='w-3.5 h-1 rounded-[100px] bg-[#333333]' />
            </section>
            <Image imgSrc='/src/assets/Right.svg' customClass='p-2.5 border box-border rounded-md border-[#1F1F1F] bg-[#1A1A1A] size-11' />
          </section>
        </section> */}
        
      </section>

      {/* <section className='flex gap-5'>
        <CategoryCard imageSrc='/src/assets/Action.png' Title='Action' />
        <CategoryCard imageSrc='/src/assets/Adventure.png' Title='Adventure' />
        <CategoryCard imageSrc='/src/assets/Comedy.png' Title='Comedy' />
        <CategoryCard imageSrc='/src/assets/Drama.png' Title='Drama' />
        <CategoryCard imageSrc='/src/assets/Horror.png' Title='Horror' />
      </section> */}

      <CustomCarousel />

    </section>
  )
}

export default CategorySection