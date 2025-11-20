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
  children

}) => {
  return (
    // Card BackGround Class
    <div className={`${cardBgClass}`}>
      {/* Image BackGround class */}
      <section className={`${imgBgClass}`}>
        {/* Image Class -- Image Source */}
        <Image imgSrc={imageSrc} customClass={`${imageClass}`} />
        {/* Shadow Class put "hidden" or "absolute" */}
        <div className={`${shadowClass}`} />
      </section>
      {/* Button Class put "flex" or "hidden" */}
      <Button customClass={`${buttonClass}`}>
        {/* Text container class */}
        <div className={`${textDivClass}`}>
          {/* First Text Class -- First Text */}
          <Typography customClass={`${fTClass}`} >{fText}</Typography>
          {/* Second Text Class --  Second Text*/}
          <Typography customClass={`${sTClass}`}>{sText}</Typography>
        </div>
        {children}
        {/* Icon class -- Icon Source */}
        <Image imgSrc={iconSrc} customClass={`${iconClass}`} />
      </Button>
    </div>
  )
}

export default CategoryCard