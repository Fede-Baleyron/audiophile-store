import { RoutesHandler } from './RoutesHandler'
import { CategoriesProvider } from './modules/pages/context/CategoriesProvider'
import { ScrollToTop } from './ScrollToTop'
import CartProvider from './modules/pages/context/CartProvider'

function App() {
  return (
    <>
      <CategoriesProvider>
        <ScrollToTop />
        <CartProvider>
          <RoutesHandler />
        </CartProvider>
      </CategoriesProvider>
    </>
  )
}

export default App
