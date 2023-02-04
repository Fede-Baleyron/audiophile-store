export interface ProductContain {
  name: string
  quantity: number
}
export interface ProductModel {
  id: string
  name: string
  description: string
  features: string
  path: string
  price: number
  new: boolean
  gallery: string[]
  contains: ProductContain[]
}
export type CategorieApiResponse = ProductModel[]
