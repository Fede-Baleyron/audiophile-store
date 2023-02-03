import { createContext } from 'react'
import { useFetchCategory } from '../../../hooks/useFetchCategory'
import { CategoriesContextType, CategoriesProviderProp } from './contextTypes'

export const CategoriesContext = createContext<CategoriesContextType>(null)

export const CategoriesProvider = ({children}: CategoriesProviderProp) => {
  const data: CategoriesContextType = useFetchCategory()
  return (
    <CategoriesContext.Provider value={data}>
      {children}
    </CategoriesContext.Provider>
  )
}
