import { ProductCardProp } from './utils/types'
import { productsPath } from '../helpers/imagesRoutes'
import { NewProductNotification } from '../pages/home/components/NewProductNotification'
import { Link, useLocation } from 'react-router-dom'
import ProductCounter from './ProductCounter'
import './styles/product-card.css'
import { useState } from 'react'

const ProductCard = (props: ProductCardProp) => {
  const show: boolean = props.view === 'show'
  const sell: boolean = props.view === 'sell'
  const even: string = props.even ? 'even' : ''
  const isSellClass = sell ? 'sell' : ''
  const { pathname } = useLocation()
  const [quantity, setQuantity] = useState<number>(1)
  const handleCounterQuantity = (e: React.MouseEvent): void => {
    if(!(e.target instanceof HTMLParagraphElement)) return
    const action: string | undefined = e?.target?.dataset?.type
    if(action === 'increase') { setQuantity(quantity + 1) }
    else if(action === 'decrease' && quantity > 1) { setQuantity(quantity - 1) }
  }
  //SE PODRÍA CREAR UN CUSTOM HOOK YA QUE TAMBIÉN SE VA A UTILIZAR EN EL CARRITO.
  return (
    <article className={`product-card-container ${isSellClass} ${even}`}>
      <img
        className={`product-card-img ${isSellClass}`}
        src={`${productsPath}/${props.path}/image-product.jpg`}
        alt={props.name}
      />
      <section className={`product-card-info-wrapper ${isSellClass}`}>
        {props.new && <NewProductNotification importance='primary' />}
        <h5 className='product-card-name'>{props.name}</h5>
        <p className={`product-card-description ${isSellClass}`}>
          {props.description}
        </p>
        {show && 
          <Link to={`${pathname}/${props.path}`} className='button button-primary'>
            VER PRODUCTO
          </Link>}
        {sell && 
          <>
            <p className='product-card-price'>${props.price}</p>
            <article className='product-card-counter-container'>
              <ProductCounter counter={quantity} handleProductQuantity={handleCounterQuantity} />
              <button 
                className='button button-primary' 
                type='button'
                data-action='increase'
                data-quantity={quantity}
                data-id={props.id}
                data-category={props.category}
                onClick={props?.handleItem}
              >
                AÑADIR AL CARRITO
              </button>
            </article>
          </>
        }
      </section>
    </article>
  )
}

export default ProductCard
