import { useDetectUserWidth } from '../../../../hooks/useDetectUserWidth'
import { homeImagesRoute, iconsPath } from '../../../helpers/imagesRoutes'
import { Button } from '../../../shared/Button'
import '../styles/popular-cards-styles.css'

export const ZX9Card = () => {
  const isDesktop = useDetectUserWidth(1201).isWidth
  const imgPath = isDesktop 
    ? `${homeImagesRoute}/speaker-zx9-desktop.png`
    : `${iconsPath}/icon-speaker.png`
  return (
    <article className='popular-card-wrapper-zx9'>
      <div className='popular-card-layer-zx9'></div>
      <div className='zx9-img-container'>
        <img
          className='popular-card-img-zx9'
          src={imgPath} 
          alt='parlante zx9' 
        />
      </div>
      <div className='popular-card-description-wrapper'>
        <h4 className='popular-card-zx9-title'>
          PARLANTE ZX9
        </h4>
        <p className='popular-card-zx9-description'>
          Actualiza tus parlantes a unos construidos con un sonido excelente.
        </p>
        <Button text='VER PRODUCTO' type='neutral-dark' />
      </div>
    </article>
  )
}
