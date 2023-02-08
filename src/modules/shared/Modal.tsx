import { ModalProp } from './utils/types'
import './styles/modal.css'

const Modal = ({ children, className, closeModal }: ModalProp) => {
  return (
    <div className={`modal ${className}`} onClick={closeModal}>
      <div className='modal-layer'></div>
      <div className='modal-children'>
        {children}
      </div>
    </div>
  )
}

export default Modal
