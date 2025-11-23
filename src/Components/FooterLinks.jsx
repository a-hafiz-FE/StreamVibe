import React from 'react'
import Typography from './Typography'
import CustomLink from './CustomLink'
import Image from './Image'

const FooterLinks = ({
  Ltitle = '',
  Llinks = [],
}) => {
  return (
    <div className='flex gap-5 flex-col'>
      <section>
        <Typography customclass='font-semibold text-lg'>{Ltitle}</Typography>
      </section>

      <section className='flex flex-col gap-2.5'>
        {Llinks.map((link, index) => {
          return (
            <CustomLink key={index}>
              <Typography customclass='font-medium text-base !text-[#999999]'>{link}</Typography>
            </CustomLink>
          )
        })}
      </section>
    </div>
  )
}

export default FooterLinks