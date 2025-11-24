import React, { memo } from 'react'
import Typography from '../../Components/Typography'
import FooterLinks from '../../Components/FooterLinks'
import FooterSocial from '../../Components/FooterSocial'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col pt-12.5 md:pt-20 pb-5 md:pb-10 px-4 md:px-20 gap-12.5 md:gap-20 bg-[#0F0F0F]'>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
        <FooterLinks Ltitle={t('home')} Llinks={[t("categories"),t("devices"),t("pricing"),t("faq")]} />
        <FooterLinks Ltitle={t('movies')} Llinks={[t("genres"),t("trending"),t("new_release"),t("popular")]} />
        <FooterLinks Ltitle={t('shows')} Llinks={[t("genres"),t("trending"),t("new_release"),t("popular")]} />
        <FooterLinks Ltitle={t('support')} Llinks={[t("contact_us")]} />
        <FooterLinks Ltitle={t('subscription')} Llinks={[t("subscription_plans"),t("subscription_features")]} />

        <FooterSocial Ltitle={t('connect_with_us')} Llinks={["/src/assets/Facebook.svg","/src/assets/X.svg","/src/assets/Linkedin.svg"]} />
      </section>

      <section className="flex flex-col gap-5 text-nowrap" >
        <span className="w-full bg-[#262626] h-0.5" />

        <section className="flex flex-col md:flex-row md:justify-between">
          <Typography customclass='font-normal text-sm !text-[#999999]' >{t('footer_copyright')}</Typography>

          <section className="flex gap-4" >
            <Typography customclass='font-normal text-sm !text-[#999999] cursor-pointer' >{t('terms_of_use')}</Typography>
            <div className="h-full w-0.5 bg-[#262626]" />
            <Typography customclass='font-normal text-sm !text-[#999999] cursor-pointer' >{t('privacy_policy')}</Typography>
            <div className="h-full w-0.5 bg-[#262626]" />
            <Typography customclass='font-normal text-sm !text-[#999999] cursor-pointer' >{t('cookie_policy')}</Typography>
          </section>

        </section>

      </section>
    </div>
  )
}

export default memo(Footer)