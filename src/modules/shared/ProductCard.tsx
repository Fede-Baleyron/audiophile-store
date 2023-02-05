import { ProductCardProp } from './utils/types'
import { productsPath } from '../helpers/imagesRoutes'
import { NewProductNotification } from '../pages/home/components/NewProductNotification'
import { Button } from './Button'
import { Link, useLocation } from 'react-router-dom'
import ProductCounter from './ProductCounter'
import './styles/product-card.css'

const ProductCard = (props: ProductCardProp) => {
  const show: boolean = props.view === 'show'
  const sell: boolean = props.view === 'sell'
  const even: string = props.even ? 'even' : ''
  const isSellClass = sell ? 'sell' : ''
  const { pathname } = useLocation()
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
              <ProductCounter />
              <Button type='primary' text='AÑADIR AL CARRITO' />
            </article>
          </>
        }
      </section>
    </article>
  )
}

export default ProductCard
