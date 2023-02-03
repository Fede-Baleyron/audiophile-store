import { CategorieApiResponse } from './servicesTypes'

const MainEndpoint: string = 'https://audiophile--api.vercel.app'
const CategoriesEndpoint: string = `${MainEndpoint}/categorias`

const getCategory = async(category: string): Promise<CategorieApiResponse> => {
  const res = await fetch(`${CategoriesEndpoint}/${category}`)
  const data = res.json()
  return data
}

export const API = {
  getCategory
}
