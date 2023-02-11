import { useEffect, useState } from 'react'
import { Location, useLocation } from 'react-router-dom'

const useModal = () => {
  const [portal, setPortal] = useState<boolean>(false)
  const { pathname }: Location = useLocation()
  const handlePortal = (): void => {
    setPortal(!portal)
  }
  useEffect(() => {
    if(portal) {
      setPortal(false)
    }
  }, [pathname])
  return { handlePortal, portal }
}

export default useModal
