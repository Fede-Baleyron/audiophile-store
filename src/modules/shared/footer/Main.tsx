import { useDetectUserWidth } from '../../../hooks/useDetectUserWidth'
import { iconsPath } from '../../helpers/imagesRoutes'
import { Menu } from '../header/components/Menu'
import './styles/footer-container.css'

const Main = () => {
  const tabletBK: boolean = useDetectUserWidth(799).isWidth
  return (
    <footer className='footer-container'>
      <section className='footer-top-container'>
        <p className='store-title footer-store-title'>audiofilia</p>
        <Menu zone={tabletBK ? 'header' : 'footer'} />
      </section>
      <section className='footer-middle-container'>
        <p className={`txt-gray-light txt-height ${tabletBK ? '' : 'txt-center'}`}>
          Audiofilia es una tienda en la que debes parar sí o sí para cumplir con tus necesidades de audio.
          Somos un equipo pequeño amantes de la música y especialistas en sonido y, con devoción, te ayudamos
          a conseguir lo mejor en cuanto a audio. Ven y visita nuestra tienda demo - estamos abiertos los 7 días de la semana.
        </p>
      </section>
      <p className='footer-rights txt-gray-light fw-bold-700'>Copyright 2022. Todos los derechos reservados.</p>
      <section className='footer-sm-wrapper'>
        <img
          className='footer-icon'
          src={`${iconsPath}/icon-facebook.svg`} 
          alt='icono facebook'
        />
        <img
          className='footer-icon'
          src={`${iconsPath}/icon-twitter.svg`} 
          alt='icono twitter'
        />
        <img
          className='footer-icon'
          src={`${iconsPath}/icon-instagram.svg`} 
          alt='icono instagram'
        />
      </section>
    </footer>
  )
}

export default Main
