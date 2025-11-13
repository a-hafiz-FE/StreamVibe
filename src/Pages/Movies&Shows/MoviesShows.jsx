import React from 'react'
import Main from '../../Layout/Main'
import Typography from '../../Components/Typography'

const MoviesShows = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-amber-500'>
      <Typography customClass='font-bold text-[48px]' >Movies&Shows</Typography>
    </div>
  )
}

export default Main(MoviesShows)