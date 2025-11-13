import React from 'react'
import Typography from '../../Components/Typography'
import FooterLinks from '../../Components/FooterLinks'
import FooterSocial from '../../Components/FooterSocial'

const Footer = () => {
  return (
    <div className='flex flex-col pt-20 pb-10 px-20 gap-20 bg-[#0F0F0F]'>
      <section className='grid grid-cols-6 gap-x-5'>
        <FooterLinks Ltitle='Home' Llinks={["Categories","Devices","Pricing","FAQ"]} />
        <FooterLinks Ltitle='Movies' Llinks={["Gernes","Trending","New Release","Popular"]} />
        <FooterLinks Ltitle='Shows' Llinks={["Gernes","Trending","New Release","Popular"]} />
        <FooterLinks Ltitle='Support' Llinks={["Contact Us"]} />
        <FooterLinks Ltitle='Subscription' Llinks={["Plans","Features"]} />

        <FooterSocial Ltitle='Connect With Us' Llinks={["/src/assets/Facebook.svg","/src/assets/X.svg","/src/assets/Linkedin.svg"]} />
      </section>
    </div>
  )
}

export default Footer