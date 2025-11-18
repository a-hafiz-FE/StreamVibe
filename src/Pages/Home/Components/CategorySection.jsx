
import CardText from '../../../Components/CardText'
import CustomCarousel from './CustomCarousel'

const CategorySection = () => {
  return (
    <section className='relative flex flex-col gap-10 md:gap-15 py-15 md:py-20'>
      <section className='flex lg:pr-60 gap-10 md:gap-20'>
        <CardText 
          cTitle="Explore our wide variety of categories" 
          cDesc="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new" 
        />        
      </section>
      <CustomCarousel />
    </section>
  )
}

export default CategorySection