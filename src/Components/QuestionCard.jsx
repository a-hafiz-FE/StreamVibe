import React, { useState } from 'react'
import Typography from './Typography'
import Button from './Button'
import Image from './Image'

const QuestionCard = ({
  Qnumber,
  Qtitle = '',
  Qans = '',
}) => {
  const [isOpenQ, setopenQ] = useState(false)

  const toggleQ = () => {
    setopenQ(!isOpenQ)
  }


  return (
    <section className='flex flex-col'>
      <section className='flex gap-4 p-6 items-center'>
        <div className='flex flex-none flex-col gap-2.5 p-4 border box-border border-[#262626] rounded-lg bg-[#1F1F1F]'>
          <Typography customClass='font-semibold text-base' >{Qnumber}</Typography>
        </div>
        <section className='flex flex-2 flex-col gap-3.5'>
          {isOpenQ ? <> <Typography customClass='font-medium text-xl' >{Qtitle}</Typography> <Typography customClass='font-normal text-base !text-[#999999]' >{Qans}</Typography> </> :
            <Typography customClass='font-medium text-xl' >{Qtitle}</Typography>}
        </section>
        <Button customClass='cursor-pointer size-6 items-center justify-end flex-none flex' onClick={toggleQ}>
          <Image imgSrc={isOpenQ ? "/src/assets/Plus.svg" : "/src/assets/Minus.svg"} />
        </Button>
      </section>
      <span className='h-0.5 w-full bg-linear-to-r from-transparent from-0% via-[#E50000] via-17% to-transparent to-100%' />
    </section>
  )
}

export default QuestionCard