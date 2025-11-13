import React, { useState } from 'react'
import Button from '../../Components/Button'
import CustomLink from '../../Components/CustomLink'
import Typography from '../../Components/Typography'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {

  const page = useLocation();
  const NavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Movies & Shows', path: '/Movies&Shows' },
    { name: 'Support', path: '/Support' },
    { name: 'Subscriptions', path: '/Subscriptions' },
  ]

  const [activeIndex, setactiveIndex] = useState(NavLinks.index)

  return (
    <nav className='flex gap-4 py-2 px-2 border-2.5 box-border border-[#1F1F1F] bg-[#0F0F0F] rounded-[10px]'>
      {NavLinks.map((link, index) => (
        <Link key={index} to = {link.path}>
          <Button
            key={index}
            onClick={() => setactiveIndex(index)}
            customClass={`flex gap-2.5 py-3 px-5 rounded-lg border box-border cursor-pointer ${page.pathname == link.path
                ? 'border-[#1A1A1A] bg-[#1A1A1A]'
                : 'hover:border-[#1A1A1A] hover:bg-[#1A1A1A]'
              }`}>
            <Typography customClass={` ${activeIndex == index ? 'font-medium text-sm' : 'font-normal text-sm'}`}>{link.name}</Typography>
          </Button>
        </Link>
      ))}
    </nav>
  )
}

export default NavBar