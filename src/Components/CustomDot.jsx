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
        <div className={`${customDotPosition} ${isRTL ? "flex-row-reverse" : ""} `}>
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


// import React from "react";

// const CustomDot = ({ goToSlide, ...rest }) => {
//     const { carouselState } = rest;
//     const { currentSlide, totalItems, slidesToShow } = carouselState;

//     const numberOfSteps = Math.ceil(totalItems / slidesToShow);
//     const activeStep = Math.floor(currentSlide / slidesToShow);

//     // Calculate scrollbar thumb width and position
//     const thumbWidth = 100 / numberOfSteps;
//     const thumbPosition = (activeStep / numberOfSteps) * 100;

//     return (
//         <div className="pt-5 px-70">
//             {/* Track */}
//             <div
//                 className="relative h-1 bg-[#333333] rounded-full cursor-pointer"
//                 onClick={(e) => {
//                     const track = e.currentTarget;
//                     const rect = track.getBoundingClientRect();
//                     const clickX = e.clientX - rect.left;
//                     const percentage = clickX / rect.width;
//                     const step = Math.floor(percentage * numberOfSteps);
//                     goToSlide(step * slidesToShow);
//                 }}
//             >
//                 {/* Thumb */}
//                 <div
//                     className="absolute top-0 h-full bg-[#E50000] rounded-full transition-all duration-300"
//                     style={{
//                         width: `${thumbWidth}%`,
//                         left: `${thumbPosition}%`,
//                     }}
//                 />
//             </div>
//         </div>
//     );
// };

// export default CustomDot;
