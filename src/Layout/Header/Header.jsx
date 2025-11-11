import React from 'react'
import Image from '../../Components/Image'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='fixed z-10 w-full flex items-center justify-between py-6 px-20'>
      {/* Left */}
      <section className='flex-1'>
        <Image imgSrc='/src/assets/Logo.png' imgAlt='' customClass='h-12.5'/>
      </section>
      {/* Mid */}
      <section className='flex flex-2 justify-center'>
        <NavBar />
      </section>
      {/* Right */}
      <section className='flex justify-end gap-3.5 flex-1'>
        <Image imgSrc='/src/assets/Search.svg' customClass='h-6' />

        <Image imgSrc='/src/assets/Bell.svg' customClass='h-6' />
      </section>
    </header>
  )
}

export default Header