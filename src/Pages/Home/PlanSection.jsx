import React from 'react'
import Typography from '../../Components/Typography'
import PlanButton from '../../Components/PlanButton'
import PlanCard from '../../Components/PlanCard'
import CardText from '../../Components/CardText'

const PlanSection = () => {
  return (
    <section className='flex flex-col gap-15 py-20'>
      <section className='relative flex gap-20'>
        <CardText Ctitle="Choose the plan that's right for you" Cdesc='Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!' />

        <section className='absolute right-0 flex bottom-0 justify-end rounded-lg border box-border border-[#262626] p-2 bg-[#0F0F0F]'>
          <PlanButton />
        </section>
      </section>

      <section className='flex gap-5'>
        <PlanCard Ptitle='Basic Plan' Pdesc='Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.' Pprice={"9.99"} />
        <PlanCard Ptitle='Standard Plan' Pdesc='Access to a wider selection of movies and shows, including most new releases and exclusive content' Pprice={"12.99"} />
        <PlanCard Ptitle='Premium Plan' Pdesc='Access to a widest selection of movies and shows, including all new releases and Offline Viewing' Pprice={"14.99"} />
      </section>

    </section>
  )
}

export default PlanSection