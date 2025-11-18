import React from 'react'
import Typography from './Typography'
import CardText from './CardText'

const PlanCard = ({
  pTitle = '',
  pDesc = '',
  pPrice
}) => {
  return (
    <div className='flex flex-col rounded-[10px] border box-border border-[#262626] bg-[#1A1A1A] p-6 md:p-10 gap-7.5 md:gap-10'>
      <CardText cTitle={pTitle} cDesc={pDesc} />
      <section className='flex items-end gap-0.5'>
        <Typography customClass='font-semibold text-2xl md:text-3xl'>{`$${pPrice}`}</Typography>
        <Typography customClass='font-medium text-sm md:text-base !text-[#999999]'>/month</Typography>
      </section>
      <section className='flex gap-3 h-12.25'>
        <button className='flex flex-1 justify-center rounded-md h-12.25 border box-border border-[#262626] bg-[#141414] py-3.5 px-5 cursor-pointer'>
          <Typography customClass='font-semibold text-sm text-nowrap'>Start Free Trial</Typography>
        </button>
        <button className='flex flex-1 justify-center rounded-md gap-2.5 h-12.25 py-3.5 px-5 bg-[#E50000] cursor-pointer'>
          <Typography customClass='font-semibold text-sm text-nowrap'>Choose Plan</Typography>
        </button>
      </section>
    </div>
  )
}

export default PlanCard