import React from 'react'
import CustomLink from './CustomLink'
import Typography from './Typography'
import Image from './Image'

const FooterSocial = ({
  Ltitle = '',
  Llinks = [],
}) => {
  return (
    <div className='flex gap-5 flex-col'>
      <section>
        <Typography customclass='font-semibold text-lg'>{Ltitle}</Typography>
      </section>

      <section className='flex gap-2.5'>
        {Llinks.map((link, index) => {
          return (
            <CustomLink key={index} customclass='flex rounded-md border box-border border-[var(--button-border-2)] bg-[var(--card-bg-black)] p-3 gap-2.5'>
              <Image customclass='size-5' imgSrc={`${link}`} />
            </CustomLink>
          )
        })}
      </section>
    </div>
  )
}

export default FooterSocial