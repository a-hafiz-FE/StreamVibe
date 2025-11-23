import React from 'react'
import Main from '../../Layout/Main'
import MovieLanding from './MovieLanding'

const MoviesShows = () => {

  

  return (
    <main>
      <section className='flex flex-col px-6 lg:px-10'>
        <MovieLanding />
      </section>
    </main>
  )
}

export default Main(MoviesShows)