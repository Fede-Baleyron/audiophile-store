import { CartItemModel } from '../modules/shared/cart/utils/cartTypes'
import { ProductModel } from '../services/servicesTypes'

interface CartReducerPayload extends ProductModel {
  quantity: number,
  id: string
}
interface CartReducerActionProp {
  type: 'increase' | 'decrease' | 'remove',
  payload: CartReducerPayload | CartItemModel
}

export type cartReducerActionType = CartReducerActionProp
