import { CartItemModel, CartModel } from '../modules/shared/cart/utils/cartTypes'
import { cartReducerActionType } from './reducersTypes'

export const cartReducer = (state: CartModel, action: cartReducerActionType) => {
  console.log(action.payload)
  const { price, name, quantity, id } = action.payload
  const repeatedItem: CartItemModel | undefined = state?.products?.find(product => product.id === id)
  switch (action.type) {
    case 'increase': {
      if(repeatedItem) {
        return {
          ...state,
          cartTotal: (price * quantity) + state?.cartTotal,
          products: state?.products?.map(product => (
            product.id === id ? { ...repeatedItem, quantity: repeatedItem.quantity + quantity }
            : product
          ))
        }
      }
      return {
        ...state,
        cartLength: state?.cartLength + 1,
        cartTotal: (price * quantity) + state?.cartTotal,
        products: [
          {
            name,
            quantity,
            id,
            img: 's',
            price: price * quantity
          },
          ...(state.products as CartItemModel[]),
        ]
      }
    }
    default:
      return state
  }
}
