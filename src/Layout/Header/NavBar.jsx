import React, { useState } from 'react'
import Button from '../../Components/Button'
import Typography from '../../Components/Typography'
import { Link, useLocation } from 'react-router-dom'
import LocalizedStrings from 'react-localization'

const NavBar = () => {

  const page = useLocation();
  const NavLinks = [
    { name: {}, path: '/' },
    { name: 'Movies & Shows', path: '/Movies&Shows' },
    { name: 'Support', path: '/Support' },
    { name: 'Subscriptions', path: '/Subscriptions' },
  ]

  const [activeIndex, setactiveIndex] = useState(NavLinks.index)

  return (
    <nav className='flex md:gap-2 md:py-1 md:px-1 lg:gap-4 lg:py-2 lg:px-2 border-[3px] box-border border-[#1F1F1F] bg-[#0F0F0F] rounded-[10px]'>
      {NavLinks.map((link, index) => (
        <Link key={index} to = {link.path}>
          <Button
            key={index}
            onClick={() => setactiveIndex(index)}
            customclass={`flex md:gap-1 md:py-1.5 md:px-2.5 lg:gap-2.5 lg:py-3 lg:px-5 rounded-lg border box-border cursor-pointer ${page.pathname == link.path
                ? 'border-[#1A1A1A] bg-[#1A1A1A]'
                : 'hover:border-[#1A1A1A] hover:bg-[#1A1A1A]'
              }`}>
            <Typography customclass={` ${activeIndex == index ? 'md:font-light md:text-xs lg:font-medium lg:text-sm text-nowrap' : 'text-nowrap md:font-extralight md:text-xs lg:font-normal lg:text-sm'}`}>{link.name}</Typography>
          </Button>
        </Link>
      ))}
    </nav>
  )
}

export default NavBar