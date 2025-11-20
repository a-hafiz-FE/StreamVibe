
import CardText from '../../../Components/CardText'
import CustomCarousel from '../../../Components/CustomCarousel'
import CategoryCard from "../../../Components/CategoryCard"


const CategorySection = () => {


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
      <section className='flex lg:pr-60 gap-10 md:gap-20'>
        <CardText
          cTitle="Explore our wide variety of categories"
          cDesc="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        />
      </section>

      <CustomCarousel
        items={5}
        customButtonGroupPosition={"absolute top-24 right-0 z-10 p-3 flex items-center gap-3 border box-border border-[#1F1F1F] bg-[#0F0F0F] rounded-[10px]"}
        customDotPosition={"pt-5 justify-center flex"}
        itemClass={"pr-2.5"}

      >
        {CatList.map((card) => (
          <CategoryCard
            cardBgClass={"flex flex-col rounded-[10px] border box-border border-[#262626] p-5 md:p-6 bg-[#1A1A1A]"}
            imgBgClass={"relative"}
            imageClass={"size-full flex flex-col gap-1.25"}
            shadowClass={"absolute top-0 left-0 bg-linear-to-b h-full w-full from-transparent to-black"}
            buttonClass={"flex justify-between items-center mt-1 cursor-pointer"}
            sTClass={"font-semibold text-sm md:text-base"}
            iconSrc={"src/assets/Right.svg"}
            iconClass={"size-5 md:size-6"}
            imageSrc={card.imgSrc}
            sText={card.title}
          />
        ))}

      </CustomCarousel>
    </section>
  )
}

export default CategorySection