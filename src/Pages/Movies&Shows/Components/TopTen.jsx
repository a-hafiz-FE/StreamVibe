import React from 'react'
import CustomCarousel from '../../../Components/CustomCarousel'
import CategoryCard from '../../../Components/CategoryCard'
import { useTranslation } from 'react-i18next'
import Typography from '../../../Components/Typography'
import { FaArrowRight } from "react-icons/fa6";

const TopTen = () => {
    const { t,i18n } = useTranslation()
    const isRTL = i18n.dir() === 'rtl'

    const TopTenG = [
        {imgSrc: "src/assets/TopTen1.png", title: "Action", topTen: "top_ten_in"},
        {imgSrc: "src/assets/TopTen2.png", title: "Adventure", topTen: "top_ten_in"},
        {imgSrc: "src/assets/TopTen3.png", title: "Comedy", topTen: "top_ten_in"},
        {imgSrc: "src/assets/TopTen4.png", title: "Drama", topTen: "top_ten_in"},

        {imgSrc: "src/assets/TopTen1.png", title: "Action", topTen: "top_ten_in"},
        {imgSrc: "src/assets/TopTen2.png", title: "Adventure", topTen: "top_ten_in"},
        {imgSrc: "src/assets/TopTen3.png", title: "Comedy", topTen: "top_ten_in"},
        {imgSrc: "src/assets/TopTen4.png", title: "Drama", topTen: "top_ten_in"},

        {imgSrc: "src/assets/TopTen1.png", title: "Action", topTen: "top_ten_in"},
        {imgSrc: "src/assets/TopTen2.png", title: "Adventure", topTen: "top_ten_in"},
        {imgSrc: "src/assets/TopTen3.png", title: "Comedy", topTen: "top_ten_in"},
        {imgSrc: "src/assets/TopTen4.png", title: "Drama", topTen: "top_ten_in"},

        {imgSrc: "src/assets/TopTen1.png", title: "Action", topTen: "top_ten_in"},
        {imgSrc: "src/assets/TopTen2.png", title: "Adventure", topTen: "top_ten_in"},
        {imgSrc: "src/assets/TopTen3.png", title: "Comedy", topTen: "top_ten_in"},
        {imgSrc: "src/assets/TopTen4.png", title: "Drama", topTen: "top_ten_in"},
    ]


  return (
    <div className='relative flex flex-col gap-10'>
        <section className='flex gap-25'>
            <Typography customclass='font-bold text-[30px]'>{t('top_10_genres')}</Typography>
        </section>
        <CustomCarousel
        items={4}
        customButtonGroupPosition={`absolute top-0 end-0 z-10 p-3 flex items-center gap-3 border box-border border-[var(--button-border-1)] bg-[var(--card-bg-black-1)] rounded-[10px]`}
        customDotPosition={"pt-5 justify-center flex"}
        itemClass={"pr-1.5 lg:pr-5"}
      >
        {TopTenG.map((card) => (
          <CategoryCard
            cardBgClass={"flex flex-col rounded-[10px] lg:rounded-[12px] border box-border border-[var(--button-border-2)] p-3 lg:p-7.5 bg-[var(--card-bg-black)]"}
            imgBgClass={"relative"}
            imageClass={"size-full flex flex-col gap-1.25"}
            shadowClass={"absolute top-0 left-0 bg-linear-to-b h-full w-full from-transparent to-[var(--background-color)]"}
            buttonClass={`flex justify-between items-center mt-1 cursor-pointer`}
            textDivClass={"flex flex-col"}
            fTClass={"flex rounded-[4px] font-semibold text-xs text-npwrap p-2 gap-2.5 bg-[#E50000]"}
            fText={t(card.topTen)}
            sTClass={`font-semibold text-start text-sm md:text-base`}
            iconName={<FaArrowRight className={`size-5 md:size-7 text-[var(--text-primary)] ${isRTL ? 'transform scale-x-[-1]' : ''}`} />}
            imageSrc={card.imgSrc}
            sText={t(card.title)}
          />
        ))}
      </CustomCarousel>

    </div>
  )
}

export default TopTen