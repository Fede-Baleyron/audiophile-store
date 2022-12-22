import { NewProductNotification } from './NewProductNotification'
import { homeImagesRoute } from '../../../helpers/imagesRoutes'
import '../styles/hero-section.css'
import { HeroSectionProp } from '../utils/types'
import { Button } from '../../../shared/Button'

export const HeroSection = (props: HeroSectionProp) => {
  return (
    <div className='hero-section-container'>
      <section className='hero-section-wrapper max-w'>
        <article className='new-prod-info-container'>
          <NewProductNotification importance={props.importance} />
          <h2 className='new-prod-title'>{props.title}</h2>
          <p className='new-prod-description'>
            {props.description}
          </p>
          <Button text='VER PRODUCTO' link={props.link} />
        </article>
        <article className='hero-section-img'>
          <img
            className='hero-img'
            src={`${homeImagesRoute}/hero-img-mobile.jpg`} 
            alt='' 
          />
        </article>
      </section>
    </div>
  )
}
