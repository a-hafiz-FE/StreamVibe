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
    <div className='flex rounded-lg border box-border border-[#262626] bg-[#0F0F0F]'>
      <button className='flex rounded-[100px] py-3 px-5 gap-2.5 focus:rounded-md focus:bg-[#1F1F1F]'>
        <Typography customClass='font-medium text-sm !text-[#999999] !focus:text-[#FFFFFF]'>Monthly</Typography>
      </button>
    </div>
  )
}

export default PlanButton