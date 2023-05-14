import { lazy, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductModel } from '../../../../services/servicesTypes'
import { Loader } from '../../../shared/Loader'
import { CategoriesContext } from '../../context/CategoriesProvider'
import { DynamicCardProp } from '../utils/dynamic-product-types'
import { DynamicWrapper } from './DynamicWrapper'
import { useCartContext } from '../../context/CartProvider'
const ProductCard = lazy(() => import('../../../shared/ProductCard'))

export const DynamicCard = ({ items }: DynamicCardProp) => {
  const contextData = useContext(CategoriesContext)
  const cartData = useCartContext()
  const { product, category } = useParams()
  let selectedItem: ProductModel | undefined = undefined
  selectedItem = items?.find(item => item.path === product)
  const isCategory = category !== undefined ? category : ''
  useEffect(() => {
    if(contextData?.data[isCategory] === null) {
      contextData?.getData(isCategory)
    }
  }, [])
  return (
    <>
      {selectedItem ?
        <DynamicWrapper 
          features={selectedItem.features} 
          contains={selectedItem.contains}
          gallery={selectedItem.gallery}
          galleryPath={selectedItem.path}
        >
          <ProductCard
            key={selectedItem.id}
            id={selectedItem.id}
            name={selectedItem.name}
            description={selectedItem.description}
            new={selectedItem.new}
            path={selectedItem.path}
            price={selectedItem.price}
            view='sell'
            category={category}
            handleItem={cartData?.handleItem ? cartData?.handleItem : undefined}
          />
        </DynamicWrapper>
        : <Loader />
      }
    </>
  )
}
