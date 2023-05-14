import { useFetchCategoryReturn } from '../../../hooks/hooksTypes'
import { CartModel } from '../../shared/cart/utils/cartTypes'

export interface CategoriesProviderProp {
  children: React.ReactNode
}
export interface CartProviderProp {
  children: React.ReactNode
}
interface CategoriesContextData {
  data: useFetchCategoryReturn
  getData(category: string): void
}
export type CategoriesContextType = CategoriesContextData | null

interface CartContextProp {
  cart: CartModel,
  handleItem(e: React.MouseEvent): void
}
export type CartContextType = CartContextProp | null
