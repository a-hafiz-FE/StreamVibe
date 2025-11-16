import React from 'react'
import Typography from '../../Components/Typography'
import FooterLinks from '../../Components/FooterLinks'
import FooterSocial from '../../Components/FooterSocial'

const Footer = () => {
  return (
    <div className='flex flex-col pt-12.5 md:pt-20 pb-5 md:pb-10 px-4 md:px-20 gap-12.5 md:gap-20 bg-[#0F0F0F]'>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
        <FooterLinks Ltitle='Home' Llinks={["Categories","Devices","Pricing","FAQ"]} />
        <FooterLinks Ltitle='Movies' Llinks={["Gernes","Trending","New Release","Popular"]} />
        <FooterLinks Ltitle='Shows' Llinks={["Gernes","Trending","New Release","Popular"]} />
        <FooterLinks Ltitle='Support' Llinks={["Contact Us"]} />
        <FooterLinks Ltitle='Subscription' Llinks={["Plans","Features"]} />

        <FooterSocial Ltitle='Connect With Us' Llinks={["/src/assets/Facebook.svg","/src/assets/X.svg","/src/assets/Linkedin.svg"]} />
      </section>

      <section className="flex flex-col gap-5 text-nowrap" >
        <span className="w-full bg-[#262626] h-0.5" />

        <section className="flex flex-col md:flex-row md:justify-between">
          <Typography customClass='font-normal text-sm !text-[#999999]' >@2023 streamvib, All Rights Reserved</Typography>

          <section className="flex gap-4" >
            <Typography customClass='font-normal text-sm !text-[#999999] cursor-pointer' >Terms of Use</Typography>
            <div className="h-full w-0.5 bg-[#262626]" />
            <Typography customClass='font-normal text-sm !text-[#999999] cursor-pointer' >Privacy Policy</Typography>
            <div className="h-full w-0.5 bg-[#262626]" />
            <Typography customClass='font-normal text-sm !text-[#999999] cursor-pointer' >Cookie Policy</Typography>
          </section>

        </section>

      </section>
    </div>
  )
}

export default Footer