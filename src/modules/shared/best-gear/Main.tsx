import { homeImagesRoute } from '../../helpers/imagesRoutes'
import './styles/best-gear-section.css'

const Main = () => {
  return (
    <section className='best-gear-section max-w'>
      <img
        className='best-gear-img'
        src={`${homeImagesRoute}/best-gear.jpg`} 
        alt='Muchacho escuchando música'  
      />
      <article className='best-gear-section-slogan-wrapper'>
        <h1 className='slogan-title'>
          ENTREGÁNDOTE EL
          <span className='slogan-title-important-word'> MEJOR </span>
          EQUIPO DE AUDIO
        </h1>
        <p className='slogan-para'>
          Localizado en el centro de Buenos Aires, Audiofilia es la primer tienda que vas a visitar, 
          si lo que quieres es equipamiento de alta gama, tales como: cascos, auriculares, parlantes y accesorios de audio.
          Contamos con una gran variedad de salas, donde podrás buscar y probar una larga lista de nuestros productos.
          Pasa por nuestra tienda para conocer a algunas de las personas que hacen que Audiofilia sea el mejor lugar para
          que compres tu equipamiento de audio portátil.
        </p>
      </article>
    </section>
  )
}

export default Main
