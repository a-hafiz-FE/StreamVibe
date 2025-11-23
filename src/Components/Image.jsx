import React from 'react'

const Image = ({
  imgSrc,
  imgAlt,
  customclass
}) => {
  return (
    <img src={imgSrc} alt={imgAlt} className={customclass} />
  )
}

export default Image