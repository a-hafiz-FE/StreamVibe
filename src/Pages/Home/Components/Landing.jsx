import React from 'react'
import Image from '../../../Components/Image'
import Button from '../../../Components/Button'
import Typography from '../../../Components/Typography'
import { FaPlay } from "react-icons/fa6";

import { useTranslation } from 'react-i18next'


const Landing = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'
  return (
    <section className='flex relative h-full justify-center items-center'>
      <Image imgSrc='/src/assets/BGImage.png' customclass='object-cover h-full absolute top-0 left-0' />
      <Image imgSrc='src/assets/BGImages.png' customclass='object-cover h-full absolute top-0 left-0' />
      <div className='absolute top-0 w-full h-full left-0 bg-linear-[360deg,transparent_40%,#141414_100%] md:bg-linear-to-t md:from-transparent md:to-[#141414]' />
      <div className='absolute top-0 w-full h-full left-0 bg-linear-[180deg,transparent_20%,#141414_60%] md:bg-linear-to-b md:from-transparent md:from-20% md:via-[#141414] via-70% md:to-[#141414] md:to-100%' />
      <Image imgSrc='/src/assets/AbstractDesign.svg' customclass='absolute size-50 lg:size-75 mb-20' />
      <section className='flex flex-col items-center gap-7.5 md:gap-10 md:px-37.5 absolute bottom-0'>
        <section className='flex flex-col gap-2.5 w-full'>
          <Typography customclass='font-bold text-[28px] lg:text-[48px] text-center'>{t('The Best Streaming Experience')}</Typography>
          <Typography customclass='hidden lg:flex lg:font-normal lg:text-sm lg:text-center lg:!text-[#999999]'>{t('mainDesc')}</Typography>
          <Typography customclass='lg:hidden font-normal text-sm text-center !text-[#999999]'>{t('mainDesc1')}</Typography>
        </section>
        <Button customclass='flex rouned-lg py-3.5 px-6 gap-2 bg-[#E50000] h-13 w-52.25 justify-center rounded-lg cursor-pointer'>
          <FaPlay className={`size-6 text-white ${isRTL ? "transform scale-x-[-1]" : ""}`} />
          <Typography customclass='font-semibold text-sm text-nowrap'>{t('Start Watching Now')}</Typography>
        </Button>
      </section>
    </section>
  )
}

export default Landing