import React, { useEffect, useState } from 'react'
import Typography from './Typography'
import { useTranslation } from 'react-i18next'

const PlanButton = ({
  name = [],
  activePeriod,
  onClick
}) => {

  const { t } = useTranslation()

  const isActive = activePeriod === name

  return (
    <>
      <button onClick={onClick} className={`flex items-center rounded-[100px] py-3 px-5 gap-2.5 ${isActive ? "rounded-md bg-[var(--button-bg-black)]" : ""} cursor-pointer`}>
        <Typography customclass='font-medium text-sm !text-[var(--text-secondary)] w-20 focus:w-23.5'>{name}</Typography>
      </button>
    </>
  )
}

export default PlanButton