import React from 'react'
import Image from '../../Components/Image'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='fixed z-10 w-full flex items-center justify-between pt-10 px-4 pb-3.5 md:py-6 md:px-20'>
      {/* Left */}
      <section className='md:flex-1'>
        <Image imgSrc='/src/assets/Logo.png' imgAlt='' customClass='h-8.75 md:h-12.5'/>
      </section>
      {/* Mid */}
      <section className='hidden md:flex md:flex-2 md:justify-center'>
        <NavBar />
      </section>
      {/* Right */}
      <section className='flex justify-end md:gap-3.5 md:flex-1'>
        <Image imgSrc='/src/assets/Search.svg' customClass='h-6' />

        <Image imgSrc='/src/assets/Bell.svg' customClass='h-6' />
      </section>
    </header>
  )
}

export default Header