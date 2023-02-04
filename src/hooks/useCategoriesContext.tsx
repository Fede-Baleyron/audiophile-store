import { useContext } from 'react'
import { CategoriesContext } from '../modules/pages/context/CategoriesProvider'

export const useCategoriesContext = () => {
  const categoriesContext = useContext(CategoriesContext)
  return { categoriesContext }
}
