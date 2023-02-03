import { CategorieApiResponse } from '../services/servicesTypes'

export interface useFetchCategoryReturn {
  [index: string]: CategorieApiResponse | null
}
