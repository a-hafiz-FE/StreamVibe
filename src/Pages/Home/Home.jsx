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

const Home = () => {
  return (
    <main className='bg-[#141414] h-screen'>
      <Landing />

      <section className='flex flex-col px-30 bg-[#141414]'>
        <CategorySection />
        <DeviceSection />
        <FreqQuestions />
        <PlanSection />
        
      </section>

    </main>
  )
}

export default Main(Home)