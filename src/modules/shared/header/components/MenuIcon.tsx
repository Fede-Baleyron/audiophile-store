import { iconsPath } from "../../../helpers/imagesRoutes"

const MenuIcon = () => {
  return (
    <div className='menu-icon-container'>
      <img 
        className='menu-icon' 
        src={`${iconsPath}/icon-menu.svg`} 
        alt='Icono menú' 
      />
    </div>
  )
}

export default MenuIcon
