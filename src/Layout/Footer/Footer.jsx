import React from 'react'
import Typography from '../../Components/Typography'
import FooterLinks from '../../Components/FooterLinks'

const Footer = () => {
  return (
    <div className='flex flex-col pt-20 pb-10 px-20 gap-20 bg-[#0F0F0F]'>
      <section className='grid grid-cols-6 gap-x-5'>
        <FooterLinks Ltitle='Home' Llinks={["Categories","Devices","Pricing","FAQ"]} />
        <FooterLinks Ltitle='Home' Llinks={["Categories","Devices","Pricing","FAQ"]} />
        <FooterLinks Ltitle='Home' Llinks={["Categories","Devices","Pricing","FAQ"]} />
        <FooterLinks Ltitle='Home' Llinks={["Categories","Devices","Pricing","FAQ"]} />
        <FooterLinks Ltitle='Home' Llinks={["Categories","Devices","Pricing","FAQ"]} />
        <FooterLinks Ltitle='Home' Llinks={[{src: "/src/assets/Facebook.svg"}, {src: "/src/assets/X.svg"}, {src: "/src/assets/Linkedin.svg"}]} />
      </section>
    </div>
  )
}

export default Footer