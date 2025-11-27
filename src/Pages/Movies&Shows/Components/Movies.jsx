import React from 'react'
import Genres from './Genres'
import TopTen from './TopTen'

const Movies = () => {
  
  return (
    <div className='flex flex-col rounded-xl border box-border border-[#262626] p-2 lg:p-10 gap-20'>

      <Genres />
      <TopTen />
    </div>
  )
}

export default Movies