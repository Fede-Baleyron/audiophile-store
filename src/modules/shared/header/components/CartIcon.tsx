export const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
      <p className='cart-counter'>0</p>
      <img 
        className='cart-icon' 
        src='./assets/icons/icon-cart.svg' 
        alt='Icono carrito de compras' 
      />
    </div>
  )
}
