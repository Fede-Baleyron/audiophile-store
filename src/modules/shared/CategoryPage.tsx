import { useContext, useEffect } from 'react'
import { CategoryPageProp } from './utils/types'
import { CategoriesContext } from '../pages/context/CategoriesProvider'
import './styles/category-page-layout.css'

export const CategoryPage = (props: CategoryPageProp) => {
  const { category } = props
  const contextData = useContext(CategoriesContext)
  useEffect(() => {
    if(contextData?.data[category] === null) {
      contextData?.getData(category)
    }
  }, [])
  return (
    <section className='category-section-container'>
      <hr className='category-page-line' />
      <div className='category-section-wrapper'>
        <article className='category-page-header'>
          <p className='category-page-header-title'>{category.toUpperCase()}</p>
        </article>
      </div>
      {props.children}
    </section>
  )
}
