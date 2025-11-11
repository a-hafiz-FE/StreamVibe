import React from 'react'

const Link = ({
  customClass = "",
  href = "",
  onClick,
  children
}) => {
  return (
    <a href={href} className={customClass} onClick={onClick}>{children}</a>
  )
}

export default Link