import React from 'react'
import Image from './Image'
import Typography from './Typography'
import Button from './Button'

const CategoryCard = ({
  cardBgClass,
  imgBgClass,
  imageSrc,
  imageClass,
  shadowClass,
  buttonClass,
  textDivClass,
  fTClass,
  fText,
  sTClass,
  sText,
  iconSrc,
  iconClass,
  children,
  iconName,

}) => {
  return (
    // Card BackGround Class
    <div className={`${cardBgClass}`}>
      {/* Image BackGround class */}
      <section className={`${imgBgClass}`}>
        {/* Image Class -- Image Source */}
        <Image imgSrc={imageSrc} customclass={`${imageClass}`} />
        {/* Shadow Class put "hidden" or "absolute" */}
        <div className={`${shadowClass}`} />
      </section>
      {/* Button Class put "flex" or "hidden" */}
      <Button customclass={`${buttonClass}`}>
        {/* Text container class */}
        <div className={`${textDivClass}`}>
          {/* First Text Class -- First Text */}
          <Typography customclass={`${fTClass}`} >{fText}</Typography>
          {/* Second Text Class --  Second Text*/}
          <Typography customclass={`${sTClass}`}>{sText}</Typography>
        </div>
        {children}
        {/* Icon class -- Icon Source */}
        {iconName}
      </Button>
    </div>
  )
}

export default CategoryCard