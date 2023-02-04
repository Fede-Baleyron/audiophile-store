import { RoutesHandler } from './RoutesHandler'
import { CategoriesProvider } from './modules/pages/context/CategoriesProvider'
import { ScrollToTop } from './ScrollToTop'

function App() {
  return (
    <>
      <CategoriesProvider>
        <ScrollToTop />
        <RoutesHandler />
      </CategoriesProvider>
    </>
  )
}

export default App
