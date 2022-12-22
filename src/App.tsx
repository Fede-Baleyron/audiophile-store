import { RoutesHandler } from './RoutesHandler'
import Header from '../src/modules/shared/header/Main'
import BestGearSection from './modules/shared/best-gear/Main'
import Footer from './modules/shared/footer/Main'

function App() {
  return (
    <>
      <Header />
      <RoutesHandler />
      <BestGearSection />
      <Footer />
    </>
  )
}

export default App
