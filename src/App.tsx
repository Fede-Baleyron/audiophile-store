import { RoutesHandler } from './RoutesHandler'
import Header from '../src/modules/shared/header/Main'
import BestGearSection from './modules/shared/best-gear/Main'
import Footer from './modules/shared/footer/Main'

function App() {
  return (
    <>
      <div className='first-view-layout'>
        <Header />
        <RoutesHandler />
      </div>
      <BestGearSection />
      <Footer />
    </>
  )
}

export default App
