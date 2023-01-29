import './styles/product-counter.css'

export const ProductCounter = () => {
  return (
    <div className='product-counter-wrapper'>
      <p className='product-counter-minus'>-</p>
      <p className='product-counter-value'>1</p>
      <p className='product-counter-plus'>+</p>
    </div>
  )
}

export default ProductCounter
