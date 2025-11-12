import React from 'react'
import Typography from './Typography'
import CardText from './CardText'

const PlanCard = ({
  Ptitle = '',
  Pdesc = '',
  Pprice
}) => {
  return (
    <div className='flex flex-col rounded-[10px] border box-border border-[#262626] bg-[#1A1A1A] p-10 gap-10'>
      <CardText Ctitle={Ptitle} Cdesc={Pdesc} />
      <section className='flex gap-0.5'>
        <Typography customClass='font-semibold text-3xl'>{`$${Pprice}`}</Typography>
        <Typography customClass='font-medium text-base !text-[#999999]'>/month</Typography>
      </section>
      <section className='flex gap-3 h-12.25'>
        <button className='flex flex-1 justify-center rounded-md h-12.25 border box-border border-[#262626] bg-[#141414] py-3.5 px-5 cursor-pointer'>
          <Typography customClass='font-semibold text-sm'>Start Free Trial</Typography>
        </button>
        <button className='flex flex-1 justify-center rounded-md gap-2.5 h-12.25 py-3.5 px-5 bg-[#E50000] cursor-pointer'>
          <Typography customClass='font-semibold text-sm'>Choose Plan</Typography>
        </button>
      </section>
    </div>
  )
}

export default PlanCard