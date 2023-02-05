import { lazy } from 'react'
import { useDetectUserWidth } from '../../../hooks/useDetectUserWidth'
import { CartIcon } from './components/CartIcon'
const HeaderMenu = lazy(() => import('./components/Menu'))
const MenuIcon = lazy(() => import('./components/MenuIcon'))
import './styles/header-component.css'

const Main = () => {
  const desktopBK: boolean = useDetectUserWidth(1200).isWidth
  return (
    <header className='header-container'>
      <div className='header-wrapper max-w'>
        {desktopBK || <MenuIcon />}
        {desktopBK && <HeaderMenu zone='header' />}
        <p className='store-title header-store-title'>audiofilia</p>
        <CartIcon />
      </div>
    </header>
  )
}

export default Main
