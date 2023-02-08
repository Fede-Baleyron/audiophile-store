import { useState } from 'react'

const useModal = () => {
  const [portal, setPortal] = useState<boolean>(false)
  const handlePortal = (): void => { setPortal(!portal) }
  return { handlePortal, portal }
}

export default useModal
