import { ProductCardProp } from './utils/types'
import { productsPath } from '../helpers/imagesRoutes'
import { NewProductNotification } from '../pages/home/components/NewProductNotification'
import { Button } from './Button'
import ProductCounter from './ProductCounter'
import './styles/product-card.css'

export const ProductCard = (props: ProductCardProp) => {
  const show: boolean = props.view === 'show'
  const sell: boolean = props.view === 'sell'
  const isSellClass = sell ? 'sell' : ''
  return (
    <article className={`product-card-container ${isSellClass}`}>
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
        {show && <Button type='primary' text='VER PRODUCTO' />}
        {sell && 
          <>
            <p className='product-card-price'>${props.price}</p>
            <article className='product-card-counter-container'>
              <ProductCounter />
              <Button type='primary' text='AÑADIR AL CARRITO' />
            </article>
          </>
        }
      </section>
    </article>
  )
}
