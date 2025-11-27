import React, { useState, memo } from 'react'
import Button from '../../Components/Button'
import Typography from '../../Components/Typography'
import { Link, useLocation } from 'react-router-dom'

import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Providers/ThemeProvider';

const NavBar = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light'
  const { t } = useTranslation()

  const page = useLocation();
  const NavLinks = [
    { name: 'home', path: '/' },
    { name: 'MoviesShows', path: '/Movies&Shows' },
    { name: 'Support', path: '/Support' },
    { name: 'Subscriptions', path: '/Subscriptions' },
  ]

  const [activeIndex, setactiveIndex] = useState(NavLinks.index)

  return (
    <nav className={`flex md:gap-2 md:py-1 md:px-1 lg:gap-4 lg:py-2 lg:px-2 border-[3px] box-border border-[var(--button-border-1)] bg-[var(--card-bg-black-1)] rounded-[10px]`}>
      {NavLinks.map((link, index) => (
        <Link key={index} to={link.path}>
          <Button
            key={index}
            onClick={() => setactiveIndex(index)}
            customclass={`flex md:gap-1 md:py-1.5 md:px-2.5 lg:gap-2.5 lg:py-3 lg:px-5 rounded-lg border box-border cursor-pointer ${page.pathname == link.path
              ? 'border-[var(--card-bg-black)] bg-[var(--card-bg-black)]'
              : 'hover:border-[var(--card-bg-black)] hover:bg-[var(--card-bg-black)]'
              }`}>
            <Typography customclass={` ${activeIndex == index ? 'md:font-light md:text-xs lg:font-medium lg:text-sm text-nowrap !text-[var(--text-primary)]' : 'text-nowrap md:font-extralight md:text-xs lg:font-normal lg:text-sm'}`}>{t(link.name)}</Typography>
          </Button>
        </Link>
      ))}
    </nav>
  )
}

export default memo(NavBar)