import React, { useState } from 'react'
import Button from '../../Components/Button'
import Link from '../../Components/Link'
import Typography from '../../Components/Typography'

const NavBar = () => {

  const NavLinks = [
    {name: 'Home', path: '/'},
    {name: 'Movies & Shows', path: '/Movies&Shows'},
    {name: 'Support', path: '/Support'},
    {name: 'Subscriptions', path: '/Subscriptions'},
  ]

  const [activeIndex, setactiveIndex] = useState(NavLinks.index)

  return (
    <nav className='flex gap-4 py-2 px-2 border-2.5 box-border border-[#1F1F1F] bg-[#0F0F0F] rounded-[10px]'>
      {NavLinks.map((link, index) => (
        <Link 
        key={index} 
        href={link.path}
        onClick={() => setactiveIndex(index)}
        customClass={`flex gap-2.5 py-3 px-5 rounded-lg border box-border ${
                      activeIndex == index 
                      ? 'border-[#1A1A1A] bg-[#1A1A1A]' 
                      : 'hover:border-[#1A1A1A] hover:bg-[#1A1A1A]'
        }`}>
          <Typography customClass={` ${activeIndex == index ? 'font-medium text-sm' : 'font-normal text-sm'}`}>{link.name}</Typography>
        </Link>
      ))}
    </nav>
  )
}

export default NavBar