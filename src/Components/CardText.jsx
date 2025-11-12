import React from 'react'
import Typography from './Typography'

const CardText = ({
  Ctitle = '',
  Cdesc = '',
}) => {
  return (
    <section className='flex flex-col gap-2.5'>
      <Typography customClass='font-bold text-[28px]' >{Ctitle}</Typography>
      <Typography customClass='forn-normal text-base !text-[#999999]'>{Cdesc}</Typography>
    </section>
  )
}

export default CardText