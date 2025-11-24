import React, { memo } from 'react'

const Button = ({
  customclass = "",
  onClick,
  children
}) => {
  return (
    <button className={` ${customclass}`} onClick={onClick}>{children}</button>
  )
}

export default memo(Button)