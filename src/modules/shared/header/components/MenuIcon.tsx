import { iconsPath } from "../../../helpers/imagesRoutes"

export const MenuIcon = () => {
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
