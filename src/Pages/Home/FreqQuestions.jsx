import React from 'react'
import Typography from '../../Components/Typography'
import Button from '../../Components/Button'
import QuestionCard from '../../Components/QuestionCard'
import CardText from '../../Components/CardText'

const FreqQuestions = () => {

  const QAns = "No Answer Available Yet"
  return (
    <div className='flex flex-col gap-15 py-10'>
      <section className='relative flex gap-20'>
        <CardText Ctitle='Frequently Asked Questions' Cdesc="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe." />

        <Button customClass='absolute bottom-0 right-0 h-12.25 py-3.5 px-5 flex gap-2.5 rounded-md bg-[#E50000]'>
          <Typography customClass='font-semibold text-sm'>Ask a Question</Typography>
        </Button>
      </section>

      <section className='flex gap-10'>
        <section className='flex flex-col w-full'>
          <QuestionCard Qnumber="01" Qtitle='What is StreamVibe?' Qans='StreamVibe is a streaming service that allows you to watch movies and shows on demand.' />
          <QuestionCard Qnumber="02" Qtitle='How much does StreamVibe cost?' Qans={QAns} />
          <QuestionCard Qnumber="03" Qtitle='What content is available on StreamVibe?' Qans={QAns} />
          <QuestionCard Qnumber="04" Qtitle='How can I watch StreamVibe?' Qans={QAns} />
        </section>

        <section className='flex flex-col w-full'>
          <QuestionCard Qnumber="05" Qtitle='How do I sign up for StreamVibe?' Qans={QAns} />
          <QuestionCard Qnumber="06" Qtitle='What is the StreamVibe free trial?' Qans={QAns} />
          <QuestionCard Qnumber="07" Qtitle='How do I contact StreamVibe customer support?' Qans={QAns} />
          <QuestionCard Qnumber="08" Qtitle='What are the StreamVibe payment methods?' Qans={QAns} />
        </section>
      </section>
    </div>
  )
}

export default FreqQuestions