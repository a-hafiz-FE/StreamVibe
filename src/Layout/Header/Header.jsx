import { memo } from 'react'
import Image from '../../Components/Image'
import NavBar from './NavBar'
import { FaSistrix, FaRegBell } from 'react-icons/fa';
import SideMenu from '../Side/SideMenu';
import LanguageButton from './LanguageButton';
import ToggleButton from './ToggleButton';
import { useTheme } from '../../Providers/ThemeProvider';

const Header = () => {

  const { theme } = useTheme();
  const isLIGHT = theme === 'light';
  
  return (
    <header className={`fixed z-20 w-full flex items-center justify-between pt-10 px-4 pb-3.5 md:py-6 md:px-20 ${isLIGHT ? "bg-linear-[0deg,#F8F8F800_0%,#F8F8F866_10%,#F8F8F8_90%]" : ""} `}>
      {/* Left */}
      <section className='md:flex-1'>
        {isLIGHT ? 
        <Image imgSrc='/src/assets/LogoDark.svg' imgAlt='' customclass='h-8.75 md:h-12.5' /> :
        <Image imgSrc='/src/assets/Logo.svg' imgAlt='' customclass='h-8.75 md:h-12.5' /> }
      </section>
      {/* Mid */}
      <section className='hidden md:flex md:flex-2 md:justify-center'>
        <NavBar />
      </section>
      {/* Right */}
      <section className='hidden md:flex md:justify-end items-center md:gap-3.5 md:flex-1'>
        <ToggleButton />
        <LanguageButton />
        <FaSistrix className="text-[var(--text-primary))] size-6 cursor-pointer" />
        <FaRegBell className="text-[var(--text-primary))] size-6 cursor-pointer" />
      </section>
      <section className='md:hidden flex justify-end flex-1'>

        <div className={`p-3 flex gap-3.5 border-[3px] rounded-md bg-[var(--card-bg-black))] border-[var(--button-border-2))]`}>
          <SideMenu />
        </div>
      </section>
    </header>
  )
}

export default memo(Header)