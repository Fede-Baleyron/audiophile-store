export interface CartItemModel {
  id: string
  img: string
  name: string
  price: number
  quantity: number
}
export interface CartModel {
  products: CartItemModel[]
  cartLength: number
  cartTotal: number
}
