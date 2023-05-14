import { ProductCounterProp } from './utils/types'
import './styles/product-counter.css'

export const ProductCounter = ({ counter, handleProductQuantity }: ProductCounterProp) => {
  return (
    <div className='product-counter-wrapper'>
      <p className='product-counter-minus' data-type='decrease' onClick={handleProductQuantity}>-</p>
      <p className='product-counter-value'>{counter}</p>
      <p className='product-counter-plus' data-type='increase' onClick={handleProductQuantity}>+</p>
    </div>
  )
}

export default ProductCounter
