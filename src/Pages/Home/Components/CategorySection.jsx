
import CardText from '../../../Components/CardText'
import CustomCarousel from './CustomCarousel'

const CategorySection = () => {
  return (
    <section className='relative flex flex-col gap-15 py-20'>
      <section className='flex gap-10 md:gap-20'>
        <CardText 
          Ctitle="Explore our wide variety of categories" 
          Cdesc="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new" 
        />        
      </section>
      <CustomCarousel />
    </section>
  )
}

export default CategorySection