import React, { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { LuLanguages } from "react-icons/lu";
import { useTheme } from '../../Providers/ThemeProvider';

const LanguageButton = () => {

    const { theme } = useTheme();
    const isLight = theme === 'light'

    const [isDropDown, setIsDropDown] = useState(false);
    // Use a ref to detect clicks outside the dropdown
    const dropdownRef = useRef(null);

    const { i18n } = useTranslation();
    const isRTL = i18n.dir() === 'rtl'
    const rtlLanguages = ["ar"];

    const lngs = {
        en: { nativeName: "English" }, // Use full names for better UI clarity
        ar: { nativeName: "العربية" }
    };

    // --- Logic for RTL/LTR and Click Outside ---

    function setPageDirection(language) {
        const dir = rtlLanguages.includes(language) ? "rtl" : "ltr"
        document.documentElement.dir = dir
    }

    // Handle language change side effect
    useEffect(() => {
        setPageDirection(i18n.language)
    }, [i18n.language])

    // Handle click outside the dropdown to close it
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropDown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    // --- Language Change Handler ---

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
        setIsDropDown(false); // Close the dropdown after selection
    }


    return (
        <div className='relative flex items-center' ref={dropdownRef}>
            <button
                onClick={() => setIsDropDown(prev => !prev)}
                className='rounded-full cursor-pointer focus:outline-none'
                aria-expanded={isDropDown}
                aria-label="Toggle language menu"
            >
                <LuLanguages className={`text-[var(--text-primary)]`} />
            </button>

            {isDropDown && (
                <div className={`absolute start-0 top-full mt-3 w-40 rounded-lg shadow-xl py-1 z-50 bg-[var(--card-bg-black-1)] border-[var(--button-border-1)] overflow-hidden`}>
                    {Object.keys(lngs).map((lng) => (
                        <button
                            onClick={() => handleLanguageChange(lng)}
                            className={`
                        ${i18n.resolvedLanguage === lng
                                    ? 'bg-[#E50000] text-[var(--text-primary)] font-bold'
                                    : 'text-[var(--text-secondary)] hover:bg-[#B3B3B3] hover:text-[var(--text-primary)]'} 
                        w-full text-start px-4 py-2 transition-colors duration-200 text-base
                      `}
                            type='button'
                            key={lng}
                        >
                            {lngs[lng].nativeName}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageButton