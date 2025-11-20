import PlanButton from '../../../Components/PlanButton'
import PlanCard from '../../../Components/PlanCard'
import CardText from '../../../Components/CardText'

const PlanSection = () => {
  return (
    <section className='flex flex-col gap-15 py-20'>
      <section className='relative flex-2 flex flex-col lg:flex-row gap-10 lg:gap-20'>
        <CardText
          cTitle="Choose the plan that's right for you"
          cDesc='Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!'
        />

        <section className="lg:absolute lg:right-0 flex lg:bottom-0 lg:justify-end">
          <section className='flex rounded-lg border box-border border-[#262626] p-2 bg-[#0F0F0F]'>
            <PlanButton />
          </section>
        </section>
      </section>

      <section className='flex flex-col xl:flex-row gap-5'>
        <PlanCard pTitle='Basic Plan' pDesc='Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.' pPrice={"9.99"} />
        <PlanCard pTitle='Standard Plan' pDesc='Access to a wider selection of movies and shows, including most new releases and exclusive content' pPrice={"12.99"} />
        <PlanCard pTitle='Premium Plan' pDesc='Access to a widest selection of movies and shows, including all new releases and Offline Viewing' pPrice={"14.99"} />
      </section>

    </section>
  )
}

export default PlanSection


// import PlanButton from '../../../Components/PlanButton'
// import PlanCard from '../../../Components/PlanCard'
// import CardText from '../../../Components/CardText'
// import { useState } from 'react'

// const PlanSection = () => {

//   const [activePeriod, setactivePeriod] = useState("Monthly")

//   const allPlansData = [
//     {
//       name: "Monthly",
//       plans: [
//         {
//           pTitle: 'Basic Plan',
//           pDesc: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
//           pPrice: "9.99",
//           period: "/Month",
//         },
//         {
//           pTitle: 'Standard Plan',
//           pDesc: 'Access to a wider selection of movies and shows, including most new releases and exclusive content.',
//           pPrice: "12.99",
//           period: "/Month",
//         },
//         {
//           pTitle: 'Premium Plan',
//           pDesc: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing.',
//           pPrice: "14.99",
//           period: "/Month",
//         }
//       ]
//     },
//     {
//       name: "Yearly",
//       plans: [
//         {
//           pTitle: 'Basic Plan',
//           pDesc: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
//           pPrice: "90.99",
//           period: "/Year"
//         },
//         {
//           pTitle: 'Standard Plan',
//           pDesc: 'Access to a wider selection of movies and shows, including most new releases and exclusive content.',
//           pPrice: "116.99",
//           period: "/Year",
//         },
//         {
//           pTitle: 'Premium Plan',
//           pDesc: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing.',
//           pPrice: "134.99",
//           period: "/Year",
//         }
//       ]
//     }
//   ]

//   const activePeriodData = allPlansData.find(p => p.name === activePeriod);
//   const activeCards = activePeriodData?.plans || allPlansData[0].plans;

//   return (
//     <section className='flex flex-col gap-15 py-20'>
//       <section className='relative flex-2 flex flex-col lg:flex-row gap-10 lg:gap-20'>
//         <CardText
//           cTitle="Choose the plan that's right for you"
//           cDesc='Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!'
//         />

//         <section className="lg:absolute lg:right-0 flex lg:bottom-0 lg:justify-end">
//           <section className='flex rounded-lg border box-border border-[#262626] p-2 bg-[#0F0F0F]'>
//             {allPlansData.map((plan) => (
//               <PlanButton
//                 name={[plan.name]}
//                 activePeriod={activePeriod}
//                 onClick={setactivePeriod(plan.name)} />
//             ))}
//           </section>
//         </section>
//       </section>

//       <section className='flex flex-col xl:flex-row gap-5'>
//         {activeCards.map((plan) => (
//           <PlanCard
//             pTitle={plan.pTitle}
//             pDesc={plan.pDesc}
//             pPrice={plan.pPrice}
//             pPeriod={plan.period}
//           />
//         ))}
//       </section>

//     </section>
//   )
// }

// export default PlanSection