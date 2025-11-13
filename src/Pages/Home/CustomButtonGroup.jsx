import React from 'react'
import Button from '../../Components/Button'
import Image from '../../Components/Image'


const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest
  return (
    <div className="carousel-button-group absolute bottom-4 right-4 z-10 flex items-center gap-4 bg-green-500">
      <Button customClass={`p-2 cursor-pointer ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={previous}>
        <Image imgSrc='/src/assets/Left.svg' customClass='p-2.5 border box-border rounded-md border-[#1F1F1F] bg-[#1A1A1A] size-11' />
      </Button>

      <Button onClick={next}>
        <Image imgSrc='/src/assets/Right.svg' customClass='p-2.5 border box-border rounded-md border-[#1F1F1F] bg-[#1A1A1A] size-11' />
      </Button>
    </div>
  )
}

export default CustomButtonGroup