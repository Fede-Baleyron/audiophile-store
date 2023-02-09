import { homeImagesRoute } from '../../../helpers/imagesRoutes'
import { Button } from '../../../shared/Button'

export const ZX7Card = () => {
  const mode = 'mobile'
  return (
    <article className='popular-card-wrapper-zx7'>
      <div className='popular-card-layer-zx7'>
        <img src={`${homeImagesRoute}/speaker-zx7-${mode}.png`} alt="" />
        <section className='popular-card-zx7-info-wrapper'>
          <h4 className='txt-center'>PARLANTE ZX7</h4>
          <Button text='VER PRODUCTO' type='secondary' link='/categorias/parlantes/zx7' />
        </section>
      </div>
    </article>
  )
}
