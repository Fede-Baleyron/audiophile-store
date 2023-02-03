import { RoutesHandler } from './RoutesHandler'
import Header from '../src/modules/shared/header/Main'
import BestGearSection from './modules/shared/best-gear/Main'
import Footer from './modules/shared/footer/Main'
import { CategoriesProvider } from './modules/pages/context/CategoriesProvider'

function App() {
  return (
    <>
      <CategoriesProvider>
        <Header />
        <RoutesHandler />
        <BestGearSection />
        <Footer />
      </CategoriesProvider>
    </>
  )
}

export default App
