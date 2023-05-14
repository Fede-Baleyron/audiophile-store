import { Link } from 'react-router-dom'
import { ButtonProp } from './utils/types'

export const Button = ({text, link, type}: ButtonProp) => {
  return (
    <button 
      type='button'
      className={`button button-${type}`}
    >
      <Link to={link || ''}>
        {text}
      </Link>
    </button>
  )
}
