import React from 'react'
import CardText from '../../Components/CardText'
import Typography from '../../Components/Typography'
import Button from '../../Components/Button'

const TrailSection = () => {
  return (
    <div className='py-20'>
      <div className='flex h-59 rounded-xl border box-border border-[#262626] bg-[#0F0F0F] bg-[url(/src/assets/BackgroundImages.png)] bg-cover bg-center'>
        <div className='h-full w-full bg-linear-[90deg,#0F0F0F_2%,#140F0FF7_16%,#220E0EE9_28%,#E5000080_100%] rounded-xl py-20 px-15 flex justify-between items-center'>
          <CardText Ctitle='Start your free trial today!' Cdesc='This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.' />
          <Button customClass='flex rounded-lg h-12.25 w-37.25 py-3.5 px-5 bg-[#E50000] items-center cursor-pointer'>
            <Typography customClass='font-semibold text-sm'>Start a Free Trail</Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TrailSection