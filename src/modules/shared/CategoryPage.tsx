import { CategoryPageProp } from './utils/types'
import './styles/category-page-layout.css'

export const CategoryPage = (props: CategoryPageProp) => {
  const { category } = props
  return (
    <section className='category-section-container'>
      <hr className='category-page-line' />
      <div className='category-section-wrapper'>
        <article className='category-page-header'>
          <p className='category-page-header-title'>{category}</p>
        </article>
      </div>
    </section>
  )
}
