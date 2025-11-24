import React, { useEffect, memo } from 'react'
import Image from '../../Components/Image'
import NavBar from './NavBar'
import { FaSistrix, FaRegBell } from 'react-icons/fa';
import SideMenu from '../Side/SideMenu';
import { useTranslation } from 'react-i18next';

const Header = () => {

  const { i18n } = useTranslation()
  const rtlLanguages = ["ar"]

  function setPageDirection(language) {
    const dir = rtlLanguages.includes(language) ? "rtl" : "ltr"
    document.documentElement.dir = dir
  }

  useEffect(() => {
    setPageDirection(i18n.language)
  }, [i18n.language])


  const lngs = {
    en: { nativeName: "Eng" },
    ar: { nativeName: "ع" }
  }
  return (
    <header className='fixed z-20 w-full flex items-center justify-between pt-10 px-4 pb-3.5 md:py-6 md:px-20'>
      {/* Left */}
      <section className='md:flex-1'>
        <Image imgSrc='/src/assets/Logo.png' imgAlt='' customclass='h-8.75 md:h-12.5' />
      </section>
      {/* Mid */}
      <section className='hidden md:flex md:flex-2 md:justify-center'>
        <NavBar />
      </section>
      {/* Right */}
      <section className='hidden md:flex md:justify-end items-center md:gap-3.5 md:flex-1'>
        {Object.keys(lngs).map((lng) => (
          <button className={`${i18n.resolvedLanguage === lng ? "hidden" : "flex text-white bg-[#1A1A1A] rounded-md px-4 py-1 border box-border border-[#404040] cursor-pointer hover:bg-[#FF3333] font-bold text-base"}`} type='submit' key={lng} onClick={() => { i18n.changeLanguage(lng) }} >{lngs[lng].nativeName}</button>
        ))}
        <FaSistrix className="text-white size-6 cursor-pointer" />
        <FaRegBell className="text-white size-6 cursor-pointer" />
      </section>
      <section className='md:hidden flex justify-end flex-1'>

        <div className="p-3 flex gap-3.5 border-[3px] rounded-md bg-[#1A1A1A] border-[#262626]">
          <FaRegBell className="text-white size-6 cursor-pointer" />
          <SideMenu />
        </div>
      </section>
    </header>
  )
}

export default memo(Header)