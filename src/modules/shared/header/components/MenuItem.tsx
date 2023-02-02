import { Link } from 'react-router-dom'
import { MenuItemProp } from '../utils/header-types'

export const MenuItem = (props: MenuItemProp) => {
  const classes = props?.classNames?.join(' ')
  const linkTo = props.title.toLowerCase() !== 'inicio' 
  ? `/categorias/${props.title.toLowerCase()}`
  : `/`
  return (
    <li className={`menu-item`}>
      <Link className={`${classes || ''}`} to={linkTo}>{props.title}</Link>
    </li>
  )
}
