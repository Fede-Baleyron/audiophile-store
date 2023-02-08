import { createPortal } from 'react-dom'
import { PortalProp } from './utils/types'

const Portal = ({ element }: PortalProp) => {
  const $Wrapper = document.querySelector('#portal')!
  return (
    <>
      {createPortal(element, $Wrapper)}
    </>
  )
}

export default Portal
