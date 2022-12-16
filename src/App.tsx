import { RoutesHandler } from './RoutesHandler'
import Header from '../src/modules/shared/header/Main'
import BestGearSection from './modules/shared/best-gear/Main'

function App() {
  return (
    <>
      <div className='first-view-layout'>
        <Header />
        <RoutesHandler />
      </div>
      <BestGearSection />
    </>
  )
}

export default App
