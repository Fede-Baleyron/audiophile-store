import { lazy } from 'react'
import { useCategoriesContext } from '../../../hooks/useCategoriesContext'
import { ProductModel } from '../../../services/servicesTypes'
import { CategoryPage } from '../../shared/CategoryPage'
const ProductCard = lazy(() => import('../../shared/ProductCard'))

const EarphonesLayout = () => {
  const { categoriesContext } = useCategoriesContext()
  const earphones = categoriesContext?.data?.auriculares
  return (
    <CategoryPage category='auriculares'>
      {earphones && 
        earphones.map((item: ProductModel, i: number) => (
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

export default EarphonesLayout
