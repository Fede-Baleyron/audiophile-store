import { iconsPath } from '../../../helpers/imagesRoutes'
import { CategoryCardProp } from '../utils/types'
import '../styles/category-card.css'
import { Link } from 'react-router-dom'

export const CategoryCard = (props: CategoryCardProp) => {
  return (
    <article className='category-card-container'>
      <section className='category-card-layer'>
        <img
          className='category-card-img'
          src={`${iconsPath}/icon-${props.imageName}.png`}
          alt=''
        />
        <div className='category-card-title-wrapper'>
          <h3 className='category-card-title'>{props.title}</h3>
          <Link 
            className='category-card-link' 
            to={`/categorias/${props.title.toLowerCase()}`}
          >
            TIENDA
          </Link>
        </div>
      </section>
      </article>
  )
}
