import { lazy } from 'react'
import { iconsPath } from '../../../helpers/imagesRoutes'
import { useMountTransition } from '../../../../hooks/useMountTransition'
import useModal from '../../../../hooks/useModal'
import { useCartContext } from '../../../pages/context/CartProvider'
const Portal = lazy(() => import('../../Portal'))
const Modal = lazy(() => import('../../Modal'))
const Cart = lazy(() => import('../../cart/Cart'))

export const CartIcon = () => {
  const { handlePortal, portal } = useModal()
  const renderModal = useMountTransition(portal, 300)
  const isInOut: string = portal ? 'cart-in' : 'cart-out'
  const cartLength: number | undefined = useCartContext()?.cart?.cartLength
  return (
    <div className='cart-icon-container'>
      <p className='cart-counter'>{cartLength}</p>
      <img
        className='cart-icon' 
        src={`${iconsPath}/icon-cart.svg`} 
        alt='Icono carrito de compras'
        onClick={handlePortal}
      />
      {renderModal && 
        <Portal 
          element={
            <Modal className={isInOut} closeModal={handlePortal}>
              <Cart />
            </Modal>
          } 
        />
      }
    </div>
  )
}
