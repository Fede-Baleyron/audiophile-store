import Header from '../src/modules/shared/header/Main'
import BestGearSection from './modules/shared/best-gear/Main'
import Footer from './modules/shared/footer/Main'

export const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <BestGearSection />
      <Footer />
    </>
  )
}
