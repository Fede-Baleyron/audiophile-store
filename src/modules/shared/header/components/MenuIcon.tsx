import { lazy } from 'react'
import { iconsPath } from '../../../helpers/imagesRoutes'
import { useMountTransition } from '../../../../hooks/useMountTransition'
import useModal from '../../../../hooks/useModal'
import Menu from './Menu'
const Portal = lazy(() => import('../../Portal'))
const Modal = lazy(() => import('../../Modal'))

const MenuIcon = () => {
  const { handlePortal, portal } = useModal()
  const renderModal = useMountTransition(portal, 300)
  return (
    <>
      <div className='menu-icon-container' onClick={handlePortal}>
        <img
          className='menu-icon' 
          src={`${iconsPath}/icon-menu.svg`} 
          alt='Icono menú' 
        />
      </div>
      {renderModal &&
        <Portal element={
          <Modal className={portal ? 'fade-in' : 'fade-out'} closeModal={handlePortal}>
            <Menu zone='footer' />
          </Modal>
        }
        />
      }
    </>
  )
}

export default MenuIcon
