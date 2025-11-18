import React from 'react'

const CustomDot = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState } = rest;
    const { currentSlide, totalItems, slidesToShow } = carouselState;

    const numberOfDots = Math.ceil(totalItems / slidesToShow);
    const activeDotIndex = Math.floor(currentSlide / slidesToShow);
    Math.r
    const maxSlideIndex = (numberOfDots - 1) * slidesToShow;
    return (
        <div className="pt-5 justify-center flex">
            {Array.from({ length: numberOfDots }).map((_, index) => (
                <span
                    key={index}
                    onClick={() => goToSlide(index * slidesToShow)}
                    className={`rounded-full cursor-pointer h-1 ${index === activeDotIndex ? 'w-4.5 bg-[#E50000]' : 'w-3.5 bg-[#333333]'
                        }`}
                />
            ))}
        </div>
    )
}

export default CustomDot