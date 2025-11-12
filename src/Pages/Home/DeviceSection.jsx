import React from 'react'
import Typography from '../../Components/Typography'
import DeviceCard from '../../Components/DeviceCard'
import CardText from '../../Components/CardText'

const DeviceSection = () => {

  const desc = "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"

  return (
    <section className='flex flex-col gap-15 py-20'>
      <CardText Ctitle='We Provide you streaming experience across various devices.' Cdesc='With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.' />

      <section className='flex flex-col gap-5 items-center'>
        <section className='flex gap-5'>
          <DeviceCard iconSrc='/src/assets/SmartPhone.svg' title='Smartphones' desc={desc} />
          <DeviceCard iconSrc='/src/assets/Tablet.svg' title='Tablet' desc={desc} />
          <DeviceCard iconSrc='/src/assets/SmartTV.svg' title='Smart TV' desc={desc} />
        </section>

        <section className='flex gap-5'>
          <DeviceCard iconSrc='/src/assets/LapTop.svg' title='Laptops' desc={desc} />
          <DeviceCard iconSrc='/src/assets/Game.svg' title='Gaming Consoles' desc={desc} />
          <DeviceCard iconSrc='/src/assets/VRHeadSet.svg' title='VR Headsets ' desc={desc} />
        </section>
      </section>
    </section>
  )
}

export default DeviceSection