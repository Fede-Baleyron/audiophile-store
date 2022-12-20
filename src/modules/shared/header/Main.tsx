import { lazy, Suspense } from 'react'
import { useDetectUserWidth } from '../../../hooks/useDetectUserWidth'
import { CartIcon } from './components/CartIcon'
import './styles/header-component.css'
const HeaderMenu = lazy(() => import('./components/Menu')
  .then(({Menu}) => (
    {default: Menu}
  ))
)
const MenuIcon = lazy(() => import('./components/MenuIcon')
  .then(({MenuIcon}) => (
  {default: MenuIcon}
  ))
)

const Main = () => {
  const desktopBK: boolean = useDetectUserWidth(1200).isWidth
  return (
    <header className='header-container max-w'>
      <Suspense>
        {desktopBK || <MenuIcon />}
        {desktopBK && <HeaderMenu zone='header' />}
      </Suspense>
      <p className='store-title header-store-title'>audiofilia</p>
      <CartIcon />
      <ul></ul>
    </header>
  )
}

export default Main
