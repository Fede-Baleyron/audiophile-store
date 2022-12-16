import { CartIcon } from './components/CartIcon'
import { MenuIcon } from './components/MenuIcon'
import './styles/header-component.css'

const Main = () => {
  return (
    <header className='header-container max-w'>
      <MenuIcon />
      <p className='store-title'>audiofilia</p>
      <CartIcon />
      <ul></ul>
    </header>
  )
}

export default Main
