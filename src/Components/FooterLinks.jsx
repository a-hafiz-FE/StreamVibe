import React from 'react'
import Typography from './Typography'
import Link from './Link'
import Image from './Image'

const FooterLinks = ({
  Ltitle = '',
  Llinks = [],
}) => {
  return (
    <div className='flex gap-5 flex-col'>
      <section>
        <Typography customClass='font-semibold text-lg'>{Ltitle}</Typography>
      </section>

      <section>
        {Llinks.map((link, index) => {
          if (typeof link === 'string') {
            return (
              <Link key={index}>
                <Typography customClass='font-medium text-base !text-[#999999]'>{link}</Typography>
              </Link>
            )
          }

          if (typeof link === 'object') {
            return (
              <Link key={index} customClass='flex rounded-md border box-border border-[#262626] bg-[#1A1A1A] p-3 gap-2.5'>
                <Image customClass='size-5' imgSrc={link.src} />
              </Link>
            )
          }

          return null
        })}
      </section>
    </div>
  )
}

export default FooterLinks