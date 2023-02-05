import { useParams } from 'react-router-dom'
import { ProductModel } from '../../../../services/servicesTypes'
import { Loader } from '../../../shared/Loader'
import { DynamicCardProp } from '../utils/dynamic-product-types'
import { DynamicWrapper } from './DynamicWrapper'
import ProductCard from '../../../shared/ProductCard'

export const DynamicCard = ({ items }: DynamicCardProp) => {
  const { product } = useParams()
  const selectedItem: ProductModel | undefined = items?.find(item => item.path === product)
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
            name={selectedItem.name}
            description={selectedItem.description}
            new={selectedItem.new}
            path={selectedItem.path}
            price={selectedItem.price}
            view='sell'
          />
        </DynamicWrapper>
        : <Loader />
      }
    </>
  )
}
