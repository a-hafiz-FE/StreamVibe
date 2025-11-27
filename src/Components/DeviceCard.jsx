import React from 'react'
import Image from './Image'
import Typography from './Typography'
import { useTranslation } from 'react-i18next'

const DeviceCard = ({
  iconSrc = '',
  title = '',
  desc = ''
}) => {
  const { i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'
  return (
    <div className='relative flex flex-col rounded-[10px] border box-border border-(var(--button-border-2)) p-6 md:p-10 gap-5 md:gap-6 bg-[var(--card-bg-black-1)]'>
      <div className={`absolute top-0 left-0 h-full w-full ${isRTL ? "bg-linear-[145deg,#E5000033_0%,#E5000000_30%]" : "bg-linear-[225deg,#E5000033_0%,#E5000000_30%]"} rounded-[10px]`}/>
      <section className='flex gap-2.5 items-center'>
        <Image imgSrc={iconSrc} customclass='rounded-[8px] md:rounded-[10px] border box-border border-[var(--button-border-1)] bg-[var(--background-color)] p-2.5 md:p-3 h-11 md:h-13.5 w-11 md:w-13.5' />
        <Typography customclass='font-semibold text-lg md:text-xl'>{title}</Typography>
      </section>
      <Typography customclass='font-normal text-sm md:text-base !text-[var(--text-secondary)]'>{desc}</Typography>

    </div>
  )
}

export default DeviceCard