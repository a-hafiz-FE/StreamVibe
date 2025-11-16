import React from 'react'
import Image from '../../../Components/Image'
import Button from '../../../Components/Button'
import Typography from '../../../Components/Typography'


const Landing = () => {
  return (
    <section className='flex relative h-full justify-center items-center'>
      <Image imgSrc='/src/assets/BGImage.png' customClass='absolute top-0 left-0' />
      <Image imgSrc='src/assets/BGImages.png' customClass='absolute top-0 left-0' />
      <div className='absolute top-0 w-full h-full left-0 bg-linear-to-t from-transparent to-[#141414]' />
      <div className='absolute top-0 w-full h-full left-0 bg-linear-to-b from-transparent to-[#141414]' />
      <Image imgSrc='/src/assets/AbstractDesign.svg' customClass='absolute size-100' />
      <section className='flex flex-col items-center gap-10 px-37.5 absolute bottom-0'>
        <section className='flex flex-col gap-2.5 w-full'>
          <Typography customClass='font-bold text-[48px] text-center'>The Best Streaming Experience</Typography>
          <Typography customClass='font-normal text-sm text-center !text-[#999999]'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</Typography>
        </section>
        <Button customClass='flex rouned-lg py-3.5 px-6 gap-2 bg-[#E50000] h-13 w-52.25 justify-center rounded-lg cursor-pointer'>
          <Image imgSrc='/src/assets/Play.svg' />
          <Typography customClass='font-semibold text-sm'>Start Watching Now</Typography>
        </Button>
      </section>
    </section>
  )
}

export default Landing