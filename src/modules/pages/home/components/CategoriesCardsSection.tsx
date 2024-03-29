import { CategoryCard } from './CategoryCard'
import '../styles/categories-cards-section.css'

export const CategoriesCardsSection = () => {
  return (
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
  )
}
