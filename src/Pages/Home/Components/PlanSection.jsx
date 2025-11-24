import PlanButton from '../../../Components/PlanButton'
import PlanCard from '../../../Components/PlanCard'
import CardText from '../../../Components/CardText'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const PlanSection = () => {

  const { t, i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'

  const [activePeriod, setactivePeriod] = useState(t('Monthly'))

  const allPlansData = [
    {
      name: "Monthly",
      plans: [
        {
          pTitle: 'basicPlan',
          pDesc: 'basicPlanDesc',
          pPrice: "9.99",
          period: "month",
        },
        {
          pTitle: 'standardPlan',
          pDesc: 'standardPlanDesc',
          pPrice: "12.99",
          period: "month",
        },
        {
          pTitle: 'premiumPlan',
          pDesc: 'premiumPlanDesc',
          pPrice: "14.99",
          period: "month",
        }
      ]
    },
    // {
    //   name: "Quarterly",
    //   plans: [
    //     {
    //       pTitle: 'Basic Plan',
    //       pDesc: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
    //       pPrice: "35.99",
    //       period: "/3Months"
    //     },
    //     {
    //       pTitle: 'Standard Plan',
    //       pDesc: 'Access to a wider selection of movies and shows, including most new releases and exclusive content.',
    //       pPrice: "50.99",
    //       period: "/3Months",
    //     },
    //     {
    //       pTitle: 'Premium Plan',
    //       pDesc: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing.',
    //       pPrice: "80.99",
    //       period: "/3Months",
    //     }
    //   ]
    // },
    {
      name: "Yearly",
      plans: [
        {
          pTitle: 'basicPlan',
          pDesc: 'basicPlanDesc',
          pPrice: "90.99",
          period: "year"
        },
        {
          pTitle: 'standardPlan',
          pDesc: 'standardPlanDesc',
          pPrice: "116.99",
          period: "year",
        },
        {
          pTitle: 'premiumPlan',
          pDesc: 'premiumPlanDesc',
          pPrice: "134.99",
          period: "year",
        }
      ]
    }
  ]

  const activePeriodData = allPlansData.find(p => t(p.name) === activePeriod);
  const activeCards = activePeriodData?.plans || allPlansData[0].plans;

  return (
    <section className='flex flex-col gap-15 py-20'>
      <section className='relative flex-2 flex flex-col lg:flex-row gap-10 lg:gap-20'>
        <CardText
          cDescClass={`${isRTL ? "lg:pl-80" : "lg:pr-80"}`}
          cTitle={t('planTitle')}
          cDesc={t("planDesc")}
        />

        <section className={`lg:absolute ${isRTL ? "lg:left-0" : "lg:right-0"} flex lg:bottom-0 lg:justify-end`}>
          <section className='flex rounded-lg border box-border border-[#262626] p-2 bg-[#0F0F0F]'>
            {allPlansData.map((plan) => (
              <PlanButton
                name={t(plan.name)}
                activePeriod={activePeriod}
                onClick={() => setactivePeriod(t(plan.name))} />
            ))}
          </section>
        </section>
      </section>

      <section className='flex flex-col xl:flex-row gap-5'>
        {activeCards.map((plan) => (
          <PlanCard
            pTitle={t(plan.pTitle)}
            pDesc={t(plan.pDesc)}
            pPrice={t(plan.pPrice)}
            pPeriod={t(plan.period)}
          />
        ))}
      </section>

    </section>
  )
}

export default PlanSection