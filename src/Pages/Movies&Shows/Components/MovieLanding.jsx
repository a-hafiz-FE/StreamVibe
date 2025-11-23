import CustomCarousel from '../../../Components/CustomCarousel'
import CategoryCard from '../../../Components/CategoryCard'
import Typography from '../../../Components/Typography'
import Image from '../../../Components/Image'
import { FaPlay, FaPlus, FaRegThumbsUp, FaVolumeUp } from "react-icons/fa";
import Button from '../../../Components/Button'

const MovieLanding = () => {

    const mainMovies = [
    {
      imgSrc: "src/assets/MovieImage.png",
      title: "Avengers: Endgame",
      desc: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen."
    },
    {
      imgSrc: "src/assets/MovieImage1.jpeg",
      title: "Ghostbusters (1984)",
      desc: "After losing their academic positions, three eccentric parapsychologists decide to set up a unique ghost-catching business in New York City, only to stumble upon a gateway to another dimension that threatens to unleash pure evil upon the world."
    },
    {
      imgSrc: "src/assets/MovieImage2.jpeg",
      title: "Godzilla (2014)",
      desc: "A devastating event in the past is about to be repeated as a terrifying, ancient species—long believed to be extinct—is awakened by humanity's scientific arrogance, forcing the world's most famous monster, Godzilla, to rise and restore balance."
    },
    {
      imgSrc: "src/assets/MovieImage4.png",
      title: "Star Wars: Episode IV - A New Hope",
      desc: "Following the capture of a rebel princess, a young farm boy on a desert planet is thrust into a galactic civil war when he discovers a secret message and teams up with a rogue pilot, a Wookiee co-pilot, and an old Jedi Master to save the galaxy from the tyrannical Galactic Empire."
    }
  ]

    return (
        <section className=' relative mt-20'>
            <CustomCarousel
                items={1}
                customButtonGroupPosition={"absolute bottom-0 flex items-center justify-between w-full px-20 pb-10"}
                customDotPosition={"absolute bottom-0 flex items-center justify-center w-full px-20 pb-10"}
            >
                {mainMovies.map((card) => (
                    <CategoryCard
                        cardBgClass={""}
                        imgBgClass={"relative h-full pt-6 lg:pt-10 pb-4"}
                        imageClass={"object-cover h-120 lg:h-full rounded-xl border box-border border-[#262626]"}
                        imageSrc={card.imgSrc}
                        shadowClass={"absolute pt-6 lg:pt-10 pb-4 top-0 left-0 w-full h-full bg-linear-[180deg,#14141400_50%,#14141466_60%,#141414_90%]"}
                        buttonClass={"absolute bottom-0 mb-10 md:mb-15 lg:mb-20 px-20 flex justify-end w-full flex-col gap-5 items-center"}
                        textDivClass={"flex flex-col"}
                        fTClass={"font-bold text-[24px] lg:text-[30px]"}
                        fText={card.title}
                        sTClass={"hidden lg:flex font-medium text-base !text-[#999999]"}
                        sText={card.desc}
                    >
                        <div className='flex flex-col lg:flex-row gap-1 lg:gap-5'>
                            <div className='flex rounded-lg py-3.5 lg:px-5 items-center justify-center w-full gap-1 bg-[#E50000] cursor-pointer'>
                                <FaPlay className='size-6 text-white' />
                                <Typography customclass='font-semibold text-sm'>Play Now</Typography>
                            </div>
                            <div className='flex gap-2'>
                                <div className='flex rounded-lg border box-border border-[#262626] bg-[#0F0F0F] p-3 gap-2.5 cursor-pointer'>
                                    <FaPlus className='size-6 text-white' />
                                </div>
                                <div className='flex rounded-lg border box-border border-[#262626] bg-[#0F0F0F] p-3 gap-2.5 cursor-pointer'>
                                    <FaRegThumbsUp className='size-6 text-white' />
                                </div>
                                <div className='flex rounded-lg border box-border border-[#262626] bg-[#0F0F0F] p-3 gap-2.5 cursor-pointer'>
                                    <FaVolumeUp className='size-6 text-white' />
                                </div>
                            </div>
                        </div>
                    </CategoryCard>
                ))}
            </CustomCarousel>
        </section>
    )
}

export default MovieLanding