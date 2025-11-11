import React from 'react'
import Image from './Image'
import Typography from './Typography'
import Button from './Button'

const CategoryCard = ({
  imageSrc = '',
  Title
}) => {
  return (
    <div className='flex flex-col rounded-[10px] p-6 border box-border border-[#262626] bg-[#1A1A1A]'>
      <section className='relative'>
        <Image imgSrc={imageSrc} customClass='h-full' />
        <div className='absolute top-0 left-0 bg-linear-to-b h-full w-full from-transparent to-black' />
      </section>
      <Button customClass='flex justify-between pt-1 cursor-pointer'>
        <Typography customClass='font-semibold text-base'>{Title}</Typography>
        <Image imgSrc='/src/assets/Right.svg' customClass='size-6' />
      </Button>
    </div>
  )
}

export default CategoryCard