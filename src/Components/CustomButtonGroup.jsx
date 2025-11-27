import React from 'react'
import Button from './Button'
import Image from './Image'
import { useTranslation } from 'react-i18next'
import { FaArrowRight } from "react-icons/fa6";


const CustomButtonGroup = ({ next, previous, goToSlide, customButtonGroupPosition, ...rest }) => {
  const { carouselState } = rest;
  const { currentSlide, totalItems, slidesToShow } = carouselState;

  const numberOfDots = Math.ceil(totalItems / slidesToShow);
  const activeDotIndex = Math.floor(currentSlide / slidesToShow);
  const maxSlideIndex = (numberOfDots - 1) * slidesToShow;

  const { i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'
  return (
    // absolute top-24 right-0 z-10 p-3 flex items-center gap-3 border box-border border-[#1F1F1F] bg-[#0F0F0F] rounded-[10px] 
    <div className={`${customButtonGroupPosition}`}>
      <Button customclass={`cursor-pointer ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={previous}>
        <FaArrowRight className={`p-2.5 border box-border rounded-md 
            border-[var(--button-border-1)] bg-[var(--card-bg-black)]
            text-[var(--text-primary)] ${isRTL ? "" : "scale-x-[-1]"} size-11`} />
      </Button>

      <div className={`flex gap-1`}>
        {Array.from({ length: numberOfDots }).map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index * slidesToShow)}
            className={`rounded-full cursor-pointer h-1 ${index === activeDotIndex ? 'w-4.5 bg-[#E50000]' : 'w-3.5 bg-[#333333]'
              }`}
          />
        ))}
      </div>

      <Button customclass={`cursor-pointer ${currentSlide >= maxSlideIndex ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={next}>
        <FaArrowRight className={`p-2.5 border box-border rounded-md 
            border-[var(--button-border-1)] bg-[var(--card-bg-black)]
            text-[var(--text-primary)] size-11 ${isRTL ? "scale-x-[-1]" : ""}`} />
      </Button>
    </div>
  )
}

export default CustomButtonGroup