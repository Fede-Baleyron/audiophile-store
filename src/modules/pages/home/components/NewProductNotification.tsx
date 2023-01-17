import '../styles/new-product-notification.css'
import { NewProductProp } from '../utils/types'

export const NewProductNotification = ({importance, text}: NewProductProp) => {
  return (
    <p className={`new-product new-product-${importance}`}>
      {text || 'NUEVO PRODUCTO'}
    </p>
  )
}
