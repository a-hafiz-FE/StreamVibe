import React from 'react'

const Image = ({
  imgSrc = "",
  imgAlt = "",
  customClass = ""
}) => {
  return (
    <img src={imgSrc} alt={imgAlt} className={customClass} />
  )
}

export default Image