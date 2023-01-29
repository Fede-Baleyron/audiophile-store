import { ProductCard } from '../../shared/ProductCard'
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
      <ProductCard
        new={true}
        view='show'
        name='CASCOS XX99 MARK II'
        description='Disfruta de tu audio en casi cualquier lugar y personalízalo con tus preferencias personales.\nEl elegante y muy durable diseño inhalámbrico es una gran compañía tanto en la casa, como en la calle.'
        path='xx99-mark-ii'
        // price={2999}
      />
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
