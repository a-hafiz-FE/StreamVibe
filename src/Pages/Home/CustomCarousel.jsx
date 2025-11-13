import React from 'react'
import "react-multi-carousel/lib/styles.css";
import CarouselModule from "react-multi-carousel";
import CategoryCard from '../../Components/CategoryCard';
import CustomButtonGroup from './CustomButtonGroup';
const Carousel = CarouselModule.default;


const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const CustomCarousel = () => {

  return (
    <div className=''>
      <Carousel
        slidesToSlide={5}
        arrows={false}
        renderButtonGroupOutside={true}
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={250}
        keyBoardControl={true}
        customTransition="transform 800ms ease-in-out"
        transitionDuration={800}
        containerClass="carousel-container"
        customButtonGroup={<CustomButtonGroup visibleSlides={5} />}
        dotListClass="custom-dot-list-style"
        itemClass="px-2.5"
      >

        <CategoryCard imageSrc='/src/assets/Action.png' Title='Action' />
        <CategoryCard imageSrc='/src/assets/Adventure.png' Title='Adventure' />
        <CategoryCard imageSrc='/src/assets/Comedy.png' Title='Comedy' />
        <CategoryCard imageSrc='/src/assets/Drama.png' Title='Drama' />
        <CategoryCard imageSrc='/src/assets/Horror.png' Title='Horror' />

        <CategoryCard imageSrc='/src/assets/Action.png' Title='1' />
        <CategoryCard imageSrc='/src/assets/Adventure.png' Title='1' />
        <CategoryCard imageSrc='/src/assets/Comedy.png' Title='1' />
        <CategoryCard imageSrc='/src/assets/Drama.png' Title='1' />
        <CategoryCard imageSrc='/src/assets/Horror.png' Title='1' />

        <CategoryCard imageSrc='/src/assets/Action.png' Title='2' />
        <CategoryCard imageSrc='/src/assets/Adventure.png' Title='2' />
        <CategoryCard imageSrc='/src/assets/Comedy.png' Title='2' />
        <CategoryCard imageSrc='/src/assets/Drama.png' Title='2' />
        <CategoryCard imageSrc='/src/assets/Horror.png' Title='2' />

        <CategoryCard imageSrc='/src/assets/Action.png' Title='3' />
        <CategoryCard imageSrc='/src/assets/Adventure.png' Title='3' />
        <CategoryCard imageSrc='/src/assets/Comedy.png' Title='3' />
        <CategoryCard imageSrc='/src/assets/Drama.png' Title='3' />
        <CategoryCard imageSrc='/src/assets/Horror.png' Title='3' />

      </Carousel>
    </div>
  )
}

export default CustomCarousel