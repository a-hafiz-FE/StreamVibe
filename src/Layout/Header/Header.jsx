import React from 'react'
import Image from '../../Components/Image'
import NavBar from './NavBar'
import { FaBars, FaSistrix, FaRegBell, FaSearch  } from 'react-icons/fa';
import SideMenu from '../Side/SideMenu';

const Header = () => {
  return (
    <header className='fixed z-20 w-full flex items-center justify-between pt-10 px-4 pb-3.5 md:py-6 md:px-20'>
      {/* Left */}
      <section className='md:flex-1'>
        <Image imgSrc='/src/assets/Logo.png' imgAlt='' customClass='h-8.75 md:h-12.5'/>
      </section>
      {/* Mid */}
      <section className='hidden md:flex md:flex-2 md:justify-center'>
        <NavBar />
      </section>
      {/* Right */}
      <section className='hidden md:flex md:justify-end md:gap-3.5 md:flex-1'>
        {/* <Image imgSrc='/src/assets/Search.svg' customClass='h-6' /> */}
        <FaSistrix className="text-white size-6 cursor-pointer"/>
        {/* <FaSearch className="text-white font-light size-6" /> */}

        {/* <Image imgSrc='/src/assets/Bell.svg' customClass='h-6' /> */}
        <FaRegBell className="text-white size-6 cursor-pointer" />
      </section>
      <section className='md:hidden flex justify-end flex-1'>
        {/* <FaBars className='text-white size-6' /> */}
        <div className="p-3 flex gap-3.5 border-[3px] rounded-md bg-[#1A1A1A] border-[#262626]">
          {/* <button onClick={() => {}}>
            <HiOutlineMenuAlt3 className="text-white size-6"/>
          </button> */}
          <FaRegBell className="text-white size-6 cursor-pointer" />
          <SideMenu />
        </div>
      </section>
    </header>
  )
}

export default Header