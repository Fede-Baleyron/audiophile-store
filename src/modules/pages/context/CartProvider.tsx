import { createContext, useContext } from 'react'
import { CartContextType, CartProviderProp } from './contextTypes'
import useCartHandler from '../../../hooks/useCartHandler'

const CartContext = createContext<CartContextType>(null)

const CartProvider = ({children}: CartProviderProp) => {
  const data = useCartHandler()
  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}
export const useCartContext = (): CartContextType => {
  const data = useContext(CartContext)
  return data
}

export default CartProvider
