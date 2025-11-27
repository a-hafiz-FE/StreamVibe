import React from 'react'
import Main from '../../Layout/Main'
import MovieLanding from './Components/MovieLanding'
import Movies from './Components/Movies'

const MoviesShows = () => {

  

  return (
    <main>
      <section className='flex flex-col px-6 lg:px-10'>
        
        <MovieLanding />
        <Movies />
      </section>
    </main>
  )
}

export default Main(MoviesShows)