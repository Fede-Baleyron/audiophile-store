import { CategoryCard } from './components/CategoryCard'
import { HeroSection } from './components/HeroSection'
import './styles/home.css'

const Main = () => {
  return (
    <>
      <HeroSection
        importance='secondary'
        title='CASCOS XX99 MARK I'
        description='Experimenta un sonido de calidad natural construido con una calidad excepcional, 
        para aquellos apasionados y entusiastas de la música.'
      />
      <section className='categories-cards-section max-w'>
        <CategoryCard 
          title='CASCOS'
          imageName='headphone'
        />
        <CategoryCard 
          title='PARLANTES'
          imageName='speaker'
        />
        <CategoryCard 
          title='AURICULARES'
          imageName='earphone'
        />
      </section>
    </>
  )
}

export default Main
