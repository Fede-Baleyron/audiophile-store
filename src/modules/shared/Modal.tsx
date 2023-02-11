import { ModalProp } from './utils/types'
import { iconsPath } from '../helpers/imagesRoutes'
import './styles/modal.css'

const Modal = ({ children, className, closeModal }: ModalProp) => {
  return (
    <div className={`modal ${className}`}>
      <div className='modal-layer' onClick={closeModal}></div>
      <div className='modal-children'>
        {children}
      </div>
      <img 
        className='close-btn' 
        src={`${iconsPath}/close.svg`} 
        alt='Botón cerrar modal'
        onClick={closeModal}
      />
    </div>
  )
}

export default Modal
