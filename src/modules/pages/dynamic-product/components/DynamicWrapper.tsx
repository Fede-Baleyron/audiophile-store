import { DynamicWrapperProp } from '../utils/dynamic-product-types'
import { productsPath } from '../../../helpers/imagesRoutes'
import { CategoriesCardsSection } from '../../home/components/CategoriesCardsSection'
import '../styles/dynamic-wrapper.css'

export const DynamicWrapper = (props: DynamicWrapperProp) => {
  const { children, features, contains, gallery, galleryPath } = props
  return (
    <section className='dynamic-product-container'>
      {children}
      <article className='dynamic-info-wrapper features-wrapper'>
        <h5 className='dynamic-product-title'>CARACTERÍSTICAS</h5>
        <p className='dynamic-product-subtext'>{features}</p>
      </article>
      <article className='dynamic-info-wrapper dynamic-contains-container'>
        <h5 className='dynamic-product-title'>CONTIENE</h5>
          {contains.map((item, i) => (
            <div key={i} className='dynamic-contains-wrapper'>
              <p className='dynamic-contains-quantity'>x{item.quantity}</p>
              <p className='dynamic-contains-item'>{item.name}</p>
            </div>
          ))}
      </article>
      <article className='dynamic-gallery-wrapper'>
        {gallery.map((img, i) => (
          <img
            className='dynamic-img'
            key={i}
            src={`${productsPath}/${galleryPath}/${img}.jpg`} 
            alt={`Imagen de galería número ${i}`}
          />
        ))}
      </article>
      <div className='you-may-like-container'>
        <h5 className='dynamic-product-title'>TE PUEDE INTERESAR</h5>
        <CategoriesCardsSection />
      </div>
    </section>
  )
}
