import React from 'react'
import { useTheme } from '../../Providers/ThemeProvider'
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTranslation } from 'react-i18next';


const ToggleButton = ({ }) => {

    const { theme, toggleTheme } = useTheme()
    const { t, i18n } = useTranslation()
    const isRTL = i18n.dir() === 'rtl'

    return (
        <div className='flex items-center'>
            <button
                onClick={toggleTheme}
                className={`text-[var(--text-primary))] cursor-pointer relative 
                    inline-flex h-6 w-11 items-center rounded-full 
                    bg-[var(--toggle-bg-color)]`}
            >
                <span className={`inline-block h-4 w-4 transform rounded-full 
                bg-white transition-transform ${ theme === 'light' ? isRTL ? "-translate-x-6" : "translate-x-6" : isRTL ? "-translate-x-1" : "translate-x-1"}`}>
                    {theme === 'light' ? (<MdOutlineDarkMode className='text-black size-full' />) : (<MdOutlineLightMode className='text-black size-full' />)}
                </span>
            </button>
        </div>
    )
}

export default ToggleButton