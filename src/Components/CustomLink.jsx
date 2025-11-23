import React from 'react'

const CustomLink = ({
  customclass = "",
  href = "",
  onClick,
  children
}) => {
  return (
    <a href={href} className={customclass} onClick={onClick}>{children}</a>
  )
}

export default CustomLink