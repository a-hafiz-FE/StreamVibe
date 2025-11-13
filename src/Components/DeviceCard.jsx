import React from 'react'
import Image from './Image'
import Typography from './Typography'

const DeviceCard = ({
  iconSrc = '',
  title = '',
  desc = ''
}) => {
  return (
    <div className='relative flex flex-col rounded-[10px] border box-border border-[#262626] p-10 gap-6 bg-[#0F0F0F]'>
      <div className='absolute top-0 left-0 h-full w-full bg-linear-[225deg,#E5000033_0%,#E5000000_30%] rounded-[10px]'/>
      <section className='flex gap-2.5 items-center'>
        <Image imgSrc={iconSrc} customClass='rounded-[10px] border boc-border border-[#1F1F1F] bg-[#141414] p-3 h-13.5 w-13.5' />
        <Typography customClass='font-semibold text-xl'>{title}</Typography>
      </section>
      <Typography customClass='font-normal text-base !text-[#999999]'>{desc}</Typography>

    </div>
  )
}

export default DeviceCard