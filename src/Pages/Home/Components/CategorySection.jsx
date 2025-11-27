
import CardText from '../../../Components/CardText'
import CustomCarousel from '../../../Components/CustomCarousel'
import CategoryCard from "../../../Components/CategoryCard"
import { FaArrowRight } from "react-icons/fa6";

import { useTranslation } from 'react-i18next'


const CategorySection = () => {

  const { t, i18n } = useTranslation()

  const isRTL = i18n.dir() === 'rtl'

  const CatList = [
    { imgSrc: '/src/assets/Action.png', title: 'Action', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Adventure.png', title: 'Adventure', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Comedy.png', title: 'Comedy', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Drama.png', title: 'Drama', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Horror.png', title: 'Horror', relDate: "11 April 2023" },

    { imgSrc: '/src/assets/Action.png', title: 'Action', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Adventure.png', title: 'Adventure', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Comedy.png', title: 'Comedy', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Drama.png', title: 'Drama', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Horror.png', title: 'Horror', relDate: "11 April 2023" },

    { imgSrc: '/src/assets/Action.png', title: 'Action', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Adventure.png', title: 'Adventure', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Comedy.png', title: 'Comedy', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Drama.png', title: 'Drama', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Horror.png', title: 'Horror', relDate: "11 April 2023" },

    { imgSrc: '/src/assets/Action.png', title: 'Action', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Adventure.png', title: 'Adventure', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Comedy.png', title: 'Comedy', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Drama.png', title: 'Drama', relDate: "11 April 2023" },
    { imgSrc: '/src/assets/Horror.png', title: 'Horror', relDate: "11 April 2023" },
  ]

  return (
    <section className='relative flex flex-col gap-10 md:gap-15 py-15 md:py-20'>
      <section className={`flex ${isRTL ? "lg:pl-60" : "lg:pr-60"} gap-10 md:gap-20`}>
        <CardText
          cTitle={t('categoriesTitle')}
          cDesc={t('categoriesDesc')}
        />
      </section>

      <CustomCarousel
        items={5}
        customButtonGroupPosition={`absolute top-24 end-0 z-10 p-3 flex items-center gap-3 border box-border border-[var(--button-border-1)] bg-[var(--card-bg-black-1)] rounded-[10px]`}
        customDotPosition={"pt-5 justify-center flex"}
        itemClass={"pr-2.5"}

      >
        {CatList.map((card) => (
          <CategoryCard
            cardBgClass={"flex flex-col rounded-[10px] border box-border border-[var(--button-border-2)] p-5 md:p-6 bg-[var(--card-bg-black)]"}
            imgBgClass={"relative"}
            imageClass={"size-full flex flex-col gap-1.25"}
            shadowClass={"absolute top-0 left-0 bg-linear-to-b h-full w-full from-transparent to-[var(--background-color)]"}
            buttonClass={`flex justify-between items-center mt-1 cursor-pointer`}
            textDivClass={"flex"}
            sTClass={"font-semibold text-sm md:text-base"}
            iconName={<FaArrowRight className={`size-5 md:size-7 text-[var(--text-primary)] ${isRTL ? 'transform scale-x-[-1]' : ''}`} />}
            imageSrc={card.imgSrc}
            sText={t(card.title)}
          />
        ))}

      </CustomCarousel>
    </section>
  )
}

export default CategorySection