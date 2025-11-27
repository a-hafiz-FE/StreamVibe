import React from 'react'
import Typography from './Typography'
import CardText from './CardText'
import { useTranslation } from 'react-i18next'

const PlanCard = ({
  pTitle = '',
  pDesc = '',
  pPrice,
  pPeriod
}) => {

  const { t, i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'

  return (
    <div className='flex flex-col rounded-[10px] border box-border border-[var(--button-border-2)] bg-[var(--card-bg-black)] p-6 md:p-10 gap-7.5 md:gap-10'>
      <CardText cTitle={pTitle} cDesc={pDesc} />
      <section className='flex items-end gap-0.5'>
        <Typography customclass='font-semibold text-2xl md:text-3xl'>{`$${pPrice}`}</Typography>
        <Typography customclass='font-medium text-sm md:text-base !text-[#999999]'>{pPeriod}</Typography>
      </section>
      <section className='flex gap-3 h-12.25'>
        <button className='flex flex-1 justify-center rounded-md h-12.25 border box-border border-[var(--button-border-2)] bg-[var(--background-color)] py-3.5 px-5 cursor-pointer'>
          <Typography customclass='font-semibold text-sm text-nowrap'>{t('Start Free Trial')}</Typography>
        </button>
        <button className='flex flex-1 justify-center rounded-md gap-2.5 h-12.25 py-3.5 px-5 bg-[#E50000] cursor-pointer'>
          <Typography customclass='font-semibold text-sm text-nowrap'>{t('Choose Plan')}</Typography>
        </button>
      </section>
    </div>
  )
}

export default PlanCard