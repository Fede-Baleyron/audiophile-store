import { useEffect, useState } from 'react'

export const useMountTransition = (isMounted: boolean, unmountDelay: number) => {
  const [shouldRender, setShouldRender] = useState<boolean>(false)
  useEffect(() => {
    let timeoutId: number
    if(isMounted && !shouldRender) {
      setShouldRender(true)
    } else if(!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), unmountDelay)
    }
    return() => clearTimeout(timeoutId)
  }, [isMounted, shouldRender, unmountDelay])
  return shouldRender
}
