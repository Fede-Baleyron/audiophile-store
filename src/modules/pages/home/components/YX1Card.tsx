import { Button } from '../../../shared/Button'
import { homeImagesRoute } from '../../../helpers/imagesRoutes'

export const YX1Card = () => {
  return (
    <section className='yx1-card-wrapper'>
      <img 
        src={`${homeImagesRoute}/earphones-yx1-mobile.jpg`}
        alt='image auriculares yx1' 
      />
      <article className='yx1-card-info'>
        <h4>AURICULARES YX1</h4>
        <Button text='VER PRODUCTO' type='secondary' />
      </article>
    </section>
  )
}
