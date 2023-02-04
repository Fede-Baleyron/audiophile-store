import { useParams } from 'react-router-dom'
import { useCategoriesContext } from '../../../hooks/useCategoriesContext'
import { CategorieApiResponse } from '../../../services/servicesTypes'
import { DynamicCard } from './components/DynamicCard'

const Main = () => {
  const { category } = useParams()
  const { categoriesContext } = useCategoriesContext()
  const allowedRoutes: string[] = ['cascos', 'auriculares', 'parlantes']
  const existCategory: string = category !== undefined ? category : ''
  const items: CategorieApiResponse | null | undefined = categoriesContext?.data[existCategory]
  const isAllowed: boolean = allowedRoutes.includes(existCategory)
  return (
    <>
      <DynamicCard existCategory={existCategory} items={items} />
    </>
  )
}

export default Main
