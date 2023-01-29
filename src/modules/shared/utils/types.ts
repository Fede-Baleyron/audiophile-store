export type ButtonProp = {
  text: string
  link?: string
  type: string
}
export interface ProductCardProp {
  name: string
  path: string
  description: string
  price?: number
  view: ('show' | 'sell')
  new: boolean
}
