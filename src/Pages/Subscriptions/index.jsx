 import React from 'react'
import Typography from '../../Components/Typography'
import Main from '../../Layout/Main'

const Subscriptions = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-[#141414]'>
      <Typography customClass='font-bold text-[48px]'>Subscriptions</Typography>
    </div>
  )
}

export default Main(Subscriptions)