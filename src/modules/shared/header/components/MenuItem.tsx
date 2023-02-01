import { MenuItemProp } from '../utils/header-types'

export const MenuItem = (props: MenuItemProp) => {
  const classes = props?.classNames?.join(' ')
  const linkTo = props.title.toLowerCase() !== 'inicio' 
  ? `/categorias/${props.title.toLowerCase()}`
  : `/`
  return (
    <li className={`menu-item`}>
      <a 
        className={`${classes || ''}`} 
        href={linkTo} 
        rel='noopener noreferrer'
      >
        {props.title}
      </a>
    </li>
  )
}
