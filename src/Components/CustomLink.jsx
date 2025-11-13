import React from 'react'

const CustomLink = ({
  customClass = "",
  href = "",
  onClick,
  children
}) => {
  return (
    <a href={href} className={customClass} onClick={onClick}>{children}</a>
  )
}

export default CustomLink