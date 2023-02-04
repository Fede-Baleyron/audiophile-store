import { useCategoriesContext } from '../../../hooks/useCategoriesContext'
import { ProductModel } from '../../../services/servicesTypes'
import { CategoryPage } from '../../shared/CategoryPage'
import { ProductCard } from '../../shared/ProductCard'

export const HeadphonesLayout = () => {
  const { categoriesContext } = useCategoriesContext()
  const headphones = categoriesContext?.data?.cascos
  return (
    <CategoryPage category='cascos'>
      {headphones && 
        headphones.map((item: ProductModel, i: number) => (
        <ProductCard 
          key={i}
          name={item.name}
          description={item.description}
          new={item.new}
          path={item.path}
          view='show'
          even={!(i % 2 === 0)}
        />
      ))}
    </CategoryPage>
  )
}
