import { ButtonProp } from './utils/types'
import './styles/button.css'

export const Button = ({text, link, type}: ButtonProp) => {
  return (
    <button 
      type='button'
      className={`button button-${type}`}
    >
      <a href={link || ''}>
        {text}
      </a>
    </button>
  )
}
