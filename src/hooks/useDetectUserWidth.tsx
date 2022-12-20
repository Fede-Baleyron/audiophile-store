import { useEffect, useState } from 'react'

export const useDetectUserWidth = (width: number) => {
  const [isWidth, setIsWidth] = useState<boolean>(false)

  const getClientWidth = (): boolean => {
    return window.innerWidth > width
  }
  const handleWidth = (): void => {
    setIsWidth(getClientWidth())
  }
  
  useEffect(() => {
    setIsWidth(getClientWidth())
    window.addEventListener('resize', handleWidth)

    return (): void => {
      window.removeEventListener('resize', handleWidth)
    }
  }, []);
  return {
    getClientWidth,
    isWidth
  }
}
