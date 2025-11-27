import React, { useState } from 'react'
import Typography from './Typography'
import Button from './Button'
import Image from './Image'
import { useTheme } from '../Providers/ThemeProvider'

const QuestionCard = ({
  Qnumber,
  Qtitle = '',
  Qans = '',
}) => {
  const { theme } = useTheme()
  const isLIGHT = theme === 'light'
  const [isOpenQ, setopenQ] = useState(false)

  const toggleQ = () => {
    setopenQ(!isOpenQ)
  }


  return (
    <section className='flex flex-col'>
      <section className='flex gap-3 py-5 px-3.5 md:gap-4 md:p-6 items-center'>
        <div className='flex flex-none flex-col gap-2.5 p-3 md:p-4 border box-border border-[var(--button-border-2)] rounded-md md:rounded-lg bg-[var(--button-bg-black)]'>
          <Typography customclass='font-semibold text-base' >{Qnumber}</Typography>
        </div>
        <section className="flex md:hidden flex-2">
          <Typography customclass='font-medium text-lg' >{Qtitle}</Typography>
        </section>
        <section className='hidden md:flex md:flex-2 md:flex-col md:gap-3.5'>
          {isOpenQ ? <> <Typography customclass='font-medium text-xl' >{Qtitle}</Typography> <Typography customclass='font-normal text-base !text-[var(--text-secondary)]' >{Qans}</Typography> </> :
            <Typography customclass='font-medium text-xl' >{Qtitle}</Typography>}
        </section>
        <Button customclass='cursor-pointer size-6 items-center justify-end flex-none flex' onClick={toggleQ}>
          <Image imgSrc={isOpenQ ? isLIGHT ? "/src/assets/PlusDark.svg" : "/src/assets/Plus.svg" : isLIGHT ? "/src/assets/MinusDark.svg" : "/src/assets/Minus.svg"} />
        </Button>
      </section>
      <section className="flex px-5 pb-2.5 md:hidden">
        {isOpenQ ? <Typography customclass='font-normal text-sm !text-[#999999]' >{Qans}</Typography> : <></> }
      </section>
      <span className='h-0.5 w-full bg-linear-[90deg,transparent_0%,#E50000_25%,transparent_100%]' />
    </section>
  )
}

export default QuestionCard