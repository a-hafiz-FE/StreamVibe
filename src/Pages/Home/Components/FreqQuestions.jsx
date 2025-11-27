import Typography from '../../../Components/Typography'
import Button from '../../../Components/Button'
import QuestionCard from '../../../Components/QuestionCard'
import CardText from '../../../Components/CardText'
import { useTranslation } from 'react-i18next'

const FreqQuestions = () => {

  const { t, i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'

  const QAns = t('NoAnswerAvailableYet')
  return (
    <div className='flex flex-col gap-10 md:gap-15'>
      <section className='relative flex flex-col md:flex-row gap-5 md:gap-20'>
        <section className={`${isRTL ? "lg:pl-80" : "lg:pr-80"}`}>
          <CardText
            cTitle={t('qTitle')}
            cDesc={t('qDesc')}
            cTitleClass="!text-[20px]"
          />
        </section>
        <section className={`flex-1 lg:absolute lg:bottom-0 ${isRTL ? "lg:left-0" : "lg:right-0"}`}>
          <Button customclass='h-12.25 py-3.5 px-5 flex gap-2.5 rounded-md bg-[#E50000]'>
            <Typography customclass='font-semibold text-sm text-nowrap'>{t('AskaQuestion')}</Typography>
          </Button>
        </section>
      </section>

      <section className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
        <section className='flex flex-col gap-5 w-full'>
          <QuestionCard Qnumber="01" Qtitle={t('q1')} Qans={t('a1')} />
          <QuestionCard Qnumber="02" Qtitle={t('q2')} Qans={QAns} />
          <QuestionCard Qnumber="03" Qtitle={t('q3')} Qans={QAns} />
          <QuestionCard Qnumber="04" Qtitle={t('q4')} Qans={QAns} />
        </section>

        <section className='flex flex-col gap-5 w-full'>
          <QuestionCard Qnumber="05" Qtitle={t('q5')} Qans={QAns} />
          <QuestionCard Qnumber="06" Qtitle={t('q6')} Qans={QAns} />
          <QuestionCard Qnumber="07" Qtitle={t('q7')} Qans={QAns} />
          <QuestionCard Qnumber="08" Qtitle={t('q8')} Qans={QAns} />
        </section>
      </section>
    </div>
  )
}

export default FreqQuestions