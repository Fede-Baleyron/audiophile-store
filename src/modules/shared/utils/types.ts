export type ButtonProp = {
  text: string
  link?: string
  type: string
}
export interface ProductCardProp {
  name: string
  path: string
  description: string
  view: ('show' | 'sell')
  new: boolean
}
