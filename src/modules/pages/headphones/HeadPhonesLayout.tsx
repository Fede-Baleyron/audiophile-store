import { lazy } from 'react'
import { useCategoriesContext } from '../../../hooks/useCategoriesContext'
import { ProductModel } from '../../../services/servicesTypes'
import { CategoryPage } from '../../shared/CategoryPage'
const ProductCard = lazy(() => import('../../shared/ProductCard'))

const HeadphonesLayout = () => {
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

export default HeadphonesLayout
