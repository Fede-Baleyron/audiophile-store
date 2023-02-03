import { useFetchCategoryReturn } from '../../../hooks/hooksTypes'

export interface CategoriesProviderProp {
  children: React.ReactNode
}
interface CategoriesContextData {
  data: useFetchCategoryReturn
  getData(category: string): void
}
export type CategoriesContextType = CategoriesContextData | null
