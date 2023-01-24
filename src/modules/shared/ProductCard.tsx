import { ProductCardProp } from './utils/types'
import { productsPath } from '../helpers/imagesRoutes'
import { NewProductNotification } from '../pages/home/components/NewProductNotification'
import { Button } from './Button'
import './styles/product-card.css'

export const ProductCard = (props: ProductCardProp) => {
  const show: boolean = props.view === 'show'
  return (
    <article className='product-card-container'>
      <img
        className='product-card-img'
        src={`${productsPath}/${props.path}/image-product.jpg`}
        alt={props.name}
      />
      <section className='product-card-info-wrapper'>
        {props.new && <NewProductNotification importance='primary' />}
        <h5 className='product-card-name'>{props.name}</h5>
        <p className='product-card-description'>
          {props.description}
        </p>
        {show && <Button type='primary' text='VER PRODUCTO' />}
      </section>
    </article>
  )
}
