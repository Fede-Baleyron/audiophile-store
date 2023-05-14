import { useEffect, useReducer, useState } from 'react'
import { CartItemModel, CartModel } from '../modules/shared/cart/utils/cartTypes'
import { useCategoriesContext } from './useCategoriesContext'
import { ProductModel } from '../services/servicesTypes'
import { cartReducer } from '../reducers/cartReducer'

const cartModel: CartModel = {
  products: [],
  cartLength: 0,
  cartTotal: 0
}
const useCartHandler = () => {
  const products = useCategoriesContext()?.categoriesContext?.data
  const [cart, cartDispatch] = useReducer(cartReducer, cartModel)
  const handleItem = (e: React.MouseEvent) => {
    if(!(e.target instanceof HTMLButtonElement)) return
    let selectedItem: ProductModel | undefined
    const category: string | undefined = e?.target?.dataset?.category
    const id: string | undefined = e?.target?.dataset?.id
    const quantity: number | undefined = Number(e?.target?.dataset?.quantity)
    if(products !== undefined && category) {
      selectedItem = products[category]?.find(item => item.id === id)
    }
    if(selectedItem && typeof id === 'string') {
      cartDispatch({type: 'increase', payload: {
        ...selectedItem,
        id,
        quantity
      }})
    }
  }
  useEffect(() => {
    if(cart?.cartLength > 0) {
      console.log(cart)
    }
  }, [cart])
  return {
    cart,
    handleItem
  }
}

export default useCartHandler
