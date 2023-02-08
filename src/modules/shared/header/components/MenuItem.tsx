import { NavLink } from 'react-router-dom'
import { MenuItemProp } from '../utils/header-types'

export const MenuItem = (props: MenuItemProp) => {
  const classes = props?.classNames?.join(' ')
  const linkTo = props.title.toLowerCase() !== 'inicio' 
  ? `/categorias/${props.title.toLowerCase()}`
  : `/`
  return (
    <li className={`menu-item`}>
      <NavLink 
        to={linkTo} 
        className={({isActive}: {isActive: boolean}) => isActive 
          ? `${classes} active` 
          : `${classes}`
        }
        end
      >
        {props.title}
      </NavLink>
    </li>
  )
}
