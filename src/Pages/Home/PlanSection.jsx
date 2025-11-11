import React from 'react'
import Typography from '../../Components/Typography'
import PlanButton from '../../Components/PlanButton'

const PlanSection = () => {
  return (
    <section className='flex flex-col gap-15'>
      <section className='flex gap-20'>
        <section className='flex flex-col gap-2.5'>
          <Typography customClass='font-bold text-[28px]' >Choose the plan that's right for you</Typography>
          <Typography customClass='forn-normal text-base !text-[#999999]'>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</Typography>
        </section>

        <section className='flex flex-1 bottom-0 right-0'>
          <PlanButton />
        </section>
      </section>

    </section>
  )
}

export default PlanSection