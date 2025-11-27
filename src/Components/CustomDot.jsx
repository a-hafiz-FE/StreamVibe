import React from 'react'
import { useTranslation } from 'react-i18next';

const CustomDot = ({ next, previous, goToSlide, customDotPosition, ...rest }) => {
    const { carouselState } = rest;
    const { currentSlide, totalItems, slidesToShow } = carouselState;

    const { i18n } = useTranslation()
    const isRTL = i18n.dir() ==='rtl'

    const numberOfDots = Math.ceil(totalItems / slidesToShow);
    const activeDotIndex = Math.floor(currentSlide / slidesToShow);
    Math.r
    const maxSlideIndex = (numberOfDots - 1) * slidesToShow;
    return (
        // pt-5 justify-center flex
        <div className={`${customDotPosition} `}>
            {Array.from({ length: numberOfDots }).map((_, index) => (
                <span
                    key={index}
                    onClick={() => goToSlide(index * slidesToShow)}
                    className={`rounded-full cursor-pointer h-1 ${index === activeDotIndex ? 'w-4.5 bg-[var(--button-bg-Red)]' : 'w-3.5 bg-[#333333]'
                        }`}
                />
            ))}
        </div>
    )
}

export default CustomDot
