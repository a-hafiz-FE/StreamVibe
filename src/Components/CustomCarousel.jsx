import React, { Children, useEffect, useState } from 'react'
import "react-multi-carousel/lib/styles.css";
import CarouselModule from "react-multi-carousel";
import CustomButtonGroup from './CustomButtonGroup';
import CustomDot from './CustomDot';
const Carousel = CarouselModule.default;

const CustomCarousel = ({
  items,
  customButtonGroupPosition,
  customDotPosition,
  itemClass,
  children
}) => {

  const isOneItem = items === 1;

  const [showButtons, setShowButtons] = useState(true);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setShowButtons(window.innerWidth > 1024); // Show only if > 1024px
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const responsive = items === 1 ? {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1, slidesToSlide: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
  } : {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: items + 1, slidesToSlide: items + 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: items, slidesToSlide: items },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: Math.max(2, Math.ceil(items / 2)), slidesToSlide: Math.max(2, Math.ceil(items / 2)) },
    mobile: { breakpoint: { max: 464, min: 0 }, items: Math.min(2, Math.floor(items / 2)), slidesToSlide: Math.min(2, Math.floor(items / 2)) }
  }

  return (
    <div className=''>
      <Carousel
        arrows={false}
        renderButtonGroupOutside={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        renderDotsOutside={true}
        autoPlaySpeed={250}
        keyBoardControl={true}
        customTransition="transform 800ms ease-in-out"
        transitionDuration={800}
        containerClass="carousel-container"
        customButtonGroup={showButtons ? <CustomButtonGroup customButtonGroupPosition={customButtonGroupPosition} /> : <CustomDot customDotPosition={customDotPosition} />}
        dotListClass="custom-dot-list-style"
        itemClass={itemClass}
      >
        {children}
      </Carousel>
    </div>
  )
}

export default CustomCarousel