import React from 'react'
import { CategorieApiResponse, ProductContain } from '../../../../services/servicesTypes'

export interface DynamicCardProp {
  existCategory: string
  items: CategorieApiResponse | undefined | null
}
export interface DynamicWrapperProp {
  children: React.ReactNode
  features: string
  contains: ProductContain[]
  gallery: string[]
  galleryPath: string
}
