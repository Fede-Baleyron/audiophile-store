import { CategoryCard } from './components/CategoryCard'
import { HeroSection } from './components/HeroSection'
import { YX1Card } from './components/YX1Card'
import { ZX7Card } from './components/ZX7Card'
import { ZX9Card } from './components/ZX9Card'
import './styles/home.css'
import './styles/popular-cards.css'

const Main = () => {
  return (
    <>
      <HeroSection
        importance='secondary'
        title='CASCOS XX99 MARK II'
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
      <section className='popular-section'>
        <ZX9Card />
        <ZX7Card />
        <YX1Card />
      </section>
    </>
  )
}

export default Main
