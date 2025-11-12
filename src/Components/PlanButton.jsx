import React, { useState } from 'react'
import Typography from './Typography'

const PlanButton = () => {

  const option = [
    { name: "Monthly" },
    { name: "Yearly" }
  ]

  const [selected, setselected] = useState(true)

  const changeSlected = () => {
    setselected(!selected)
  }

  return (
    <>
      <button className='flex items-center rounded-[100px] py-3 px-5 gap-2.5 focus:rounded-md focus:bg-[#1F1F1F] cursor-pointer'>
        <Typography customClass='font-medium text-sm !text-[#999999] w-20 focus:w-23.5'>Monthly</Typography>
      </button>
      <button className='flex items-center rounded-[100px] py-3 px-5 gap-2.5 focus:rounded-md focus:bg-[#1F1F1F] cursor-pointer'>
        <Typography customClass='font-medium text-sm !text-[#999999] w-20 focus:w-23.5'>Yearly</Typography>
      </button>
    </>
  )
}

export default PlanButton