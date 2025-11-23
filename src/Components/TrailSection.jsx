import React from 'react'
import CardText from './CardText'
import Button from './Button'
import Typography from './Typography'

const TrailSection = () => {
  return (
    <div className='py-5 md:py-20'>
      <div className='flex h-86 md:h-59 rounded-xl border box-border border-[#262626] bg-[#0F0F0F] bg-[url(/src/assets/BackgroundImages.png)] bg-no-repeat bg-cover bg-center'>
        <div className='h-full w-full bg-linear-[180deg,#0F0F0F_0%,#140F0FF7_12%,#220E0EE9_18%,#E5000080_100%] md:bg-linear-[90deg,#0F0F0F_2%,#140F0FF7_16%,#220E0EE9_28%,#E5000080_100%] rounded-xl py-12.5 md:py-20 px-7.5 md:px-15 gap-12.5 flex flex-col md:flex-row md:justify-between justify-center items-center'>
          <CardText 
            cTitle='Start your free trial today!' 
            cDesc='This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.'
            cTitleClass="text-center md:text-start"
            cDescClass="text-center md:text-start"
          />
          <Button customclass='flex rounded-lg h-12.25 w-37.25 py-3.5 px-5 bg-[#E50000] items-center cursor-pointer'>
            <Typography customclass='font-semibold text-sm'>Start a Free Trail</Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TrailSection