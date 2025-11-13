import React from 'react'
import Typography from '../../Components/Typography'
import Main from '../../Layout/Main'

const Support = () => {
  return (
    <div className='h-screen bg-blue-500 flex items-center justify-center'>
      <Typography customClass='font-bold text-[48px]' >Support</Typography>
    </div>
  )
}

export default Main(Support)