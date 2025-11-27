import { useEffect, useState } from 'react'
import DeviceCard from '../../../Components/DeviceCard'
import CardText from '../../../Components/CardText'
import { useTranslation } from 'react-i18next'

const DeviceSection = () => {

  const { t } = useTranslation()

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

  const desc = t('deviceDesc')
  const desc1 = t('deviceDesc1')
  return (
    <section className='flex flex-col gap-10 md:gap-15 py-20'>
      <CardText
        cTitle={t('deviceTitle')}
        cDesc={showLong ? desc1 : desc}
        cTitleClass= "!text-[20px]"
      />

      <section className='flex flex-col gap-5 items-center'>
        <section className='flex flex-col lg:flex-row gap-5'>
          <DeviceCard iconSrc='/src/assets/SmartPhone.svg' title={t('Smartphones')} desc={desc} />
          <DeviceCard iconSrc='/src/assets/Tablet.svg' title={t('Tablet')} desc={desc} />
          <DeviceCard iconSrc='/src/assets/SmartTV.svg' title={t('SmartTV')} desc={desc} />
        </section>

        <section className='flex flex-col lg:flex-row gap-5'>
          <DeviceCard iconSrc='/src/assets/LapTop.svg' title={t('Laptops')} desc={desc} />
          <DeviceCard iconSrc='/src/assets/Game.svg' title={t('GamingConsoles')} desc={desc} />
          <DeviceCard iconSrc='/src/assets/VRHeadSet.svg' title={t('VRHeadsets')} desc={desc} />
        </section>
      </section>
    </section>
  )
}

export default DeviceSection