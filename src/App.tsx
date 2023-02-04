import { RoutesHandler } from './RoutesHandler'
import { CategoriesProvider } from './modules/pages/context/CategoriesProvider'

function App() {
  return (
    <>
      <CategoriesProvider>
        <RoutesHandler />
      </CategoriesProvider>
    </>
  )
}

export default App
