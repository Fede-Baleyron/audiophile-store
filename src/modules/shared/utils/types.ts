import React from 'react'

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
  even?: boolean
  view: ('show' | 'sell')
  new: boolean
}
export interface CategoryPageProp {
  category: string
  children: React.ReactNode
}
