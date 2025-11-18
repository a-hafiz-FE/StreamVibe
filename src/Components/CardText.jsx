import React from 'react'
import Typography from './Typography'

const CardText = ({
  cTitle = "",
  cDesc = "",
  cTitleClass = "",
  cDescClass = ""
}) => {
  return (
    <section className='flex flex-col gap-2 md:gap-2.5'>
      <Typography customClass={`font-bold text-[24px] md:text-[28px] ${cTitleClass} `} >{cTitle}</Typography>
      <Typography customClass={`forn-normal text-sm md:text-base !text-[#999999] ${cDescClass}`}>{cDesc}</Typography>
    </section>
  )
}

export default CardText