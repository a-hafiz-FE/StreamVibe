import React from 'react'
import Main from '../../Layout/Main'
import Image from '../../Components/Image'
import Typography from '../../Components/Typography'
import Button from '../../Components/Button'
import Landing from './Landing'
import DeviceSection from './DeviceSection'
import CategorySection from './CategorySection'
import FreqQuestions from './FreqQuestions'
import PlanSection from './PlanSection'
import TrailSection from './TrailSection'
import CustomCarousel from './CustomCarousel'

const Home = () => {

  return (
    <main>
      <section className='h-screen bg-[#141414]'>
        <Landing />
      </section>


      <section className='px-17.5'>
        <CategorySection />
      </section>
      <section className='flex flex-col px-20'>
        
        <DeviceSection />
        <FreqQuestions />
        <PlanSection />
        <TrailSection />

        
      </section>

    </main>
  )
}

export default Main(Home)