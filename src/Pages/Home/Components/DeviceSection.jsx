import React, { useEffect, useState } from 'react'
import Typography from '../../../Components/Typography'
import DeviceCard from '../../../Components/DeviceCard'
import CardText from '../../../Components/CardText'

const DeviceSection = () => {

  const [showLong, setShowLong] = useState(true);

  // Detect screen size
    useEffect(() => {
      const handleResize = () => {
        setShowLong(window.innerWidth > 1024); // Show only if > 1024px
      };
      handleResize(); // Run on mount
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [])

  const desc = "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere."
  const desc1 = "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
  return (
    <section className='flex flex-col gap-10 md:gap-15 py-20'>
      <CardText
        cTitle='We Provide you streaming experience across various devices.'
        cDesc={showLong ? desc1 : desc}
        cTitleClass= "!text-[20px]"
      />

      <section className='flex flex-col gap-5 items-center'>
        <section className='flex flex-col lg:flex-row gap-5'>
          <DeviceCard iconSrc='/src/assets/SmartPhone.svg' title='Smartphones' desc={desc} />
          <DeviceCard iconSrc='/src/assets/Tablet.svg' title='Tablet' desc={desc} />
          <DeviceCard iconSrc='/src/assets/SmartTV.svg' title='Smart TV' desc={desc} />
        </section>

        <section className='flex flex-col lg:flex-row gap-5'>
          <DeviceCard iconSrc='/src/assets/LapTop.svg' title='Laptops' desc={desc} />
          <DeviceCard iconSrc='/src/assets/Game.svg' title='Gaming Consoles' desc={desc} />
          <DeviceCard iconSrc='/src/assets/VRHeadSet.svg' title='VR Headsets ' desc={desc} />
        </section>
      </section>
    </section>
  )
}

export default DeviceSection