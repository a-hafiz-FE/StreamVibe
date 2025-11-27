import Main from '../../Layout/Main'
import Landing from './Components/Landing'
import DeviceSection from './Components/DeviceSection'
import CategorySection from './Components/CategorySection'
import FreqQuestions from './Components/FreqQuestions'
import PlanSection from './Components/PlanSection'
import TrailSection from '../../Components/TrailSection'
import { useTheme } from '../../Providers/ThemeProvider'

const Home = () => {

  const { theme } = useTheme();

  return (
    <main>
      <section className={`h-screen bg-[var(--background-color)]`}>
        <Landing />
      </section>


      <section className='px-4 md:px-17.5'>
        <CategorySection />
      </section>
      <section className='flex flex-col px-3.75 md:px-20'>
        
        <DeviceSection />
        <FreqQuestions />
        <PlanSection />
        <TrailSection />

        
      </section>

    </main>
  )
}

export default Main(Home)