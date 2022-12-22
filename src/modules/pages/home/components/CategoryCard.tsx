import { iconsPath } from '../../../helpers/imagesRoutes'
import '../styles/category-card.css'
import { CategoryCardProp } from '../utils/types'

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
          <a 
            className='category-card-link' 
            href={`/categories/${props.categoryPath}`}
          >
            TIENDA
          </a>
        </div>
      </section>
      </article>
  )
}
