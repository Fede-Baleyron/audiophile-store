import { iconsPath } from '../../../helpers/imagesRoutes'
import { Button } from '../../../shared/Button'
import '../styles/popular-cards-styles.css'

export const ZX9Card = () => {
  return (
    <article className='popular-card-wrapper-zx9'>
      <div className='popular-card-layer-zx9'></div>
      <img
        className='popular-card-img-zx9'
        src={`${iconsPath}/icon-speaker.png`} 
        alt='parlante zx9' 
      />
      <div className='popular-card-description-wrapper'>
        <h4 className='popular-card-zx9-title txt-center'>
          PARLANTE ZX9
        </h4>
        <p className='popular-card-zx9-description txt-center'>
          Actualiza tus parlantes a unos construidos con un sonido excelente.
        </p>
        <Button text='VER PRODUCTO' type='neutral-dark' />
      </div>
    </article>
  )
}
