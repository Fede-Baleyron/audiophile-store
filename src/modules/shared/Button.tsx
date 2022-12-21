import { ButtonProp } from './utils/types'
import './styles/button.css'

export const Button = ({text, link}: ButtonProp) => {
  return (
    <button 
      type='button'
      className='button button-primary'
    >
      <a href={link || ''}>
        {text}
      </a>
    </button>
  )
}
