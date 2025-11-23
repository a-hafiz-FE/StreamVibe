import React, { useState } from 'react'
import Typography from './Typography'

const PlanButton = ({
  name = [],
  activePeriod,
  onClick
}) => {

  const isActive = activePeriod === name

  return (
    <>
      <button onClick={onClick} className={`flex items-center rounded-[100px] py-3 px-5 gap-2.5 ${isActive ? "rounded-md bg-[#1F1F1F]" : ""} cursor-pointer`}>
        <Typography customclass='font-medium text-sm !text-[#999999] w-20 focus:w-23.5'>{name}</Typography>
      </button>
    </>
  )
}

export default PlanButton