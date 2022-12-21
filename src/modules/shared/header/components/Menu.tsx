import { MenuItemObjectType, MenuProp } from '../utils/header-types'
import { MenuItem } from './MenuItem'
import '../styles/menu.css'

export const Menu = ({zone}: MenuProp) => {
  const menuItems: MenuItemObjectType[] = [
    {name: 'Inicio', id: 1},
    {name: 'Cascos', id: 2},
    {name: 'Parlantes', id: 3},
    {name: 'Auriculares', id: 4},
  ]
  return (
    <ul className={`menu-items-wrapper-${zone}`}>
      {menuItems.map(item => (
        <MenuItem
          key={item.id}
          title={item.name.toUpperCase()}
          classNames={[`menu-item-${zone}`]}
        />
      ))}
    </ul>
  )
}
