import { Route, Routes } from 'react-router-dom'
import { CategoryPage } from './modules/shared/CategoryPage'
import HomeLayout from './modules/pages/home/Main'

const categories: string[] = ['auriculares', 'cascos', 'parlantes']

export const RoutesHandler = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />} />
      {categories.map((category, i) => (
        <Route
          key={i}
          path={`/categorias/${category}`} 
          element={<CategoryPage category={category.toUpperCase()} />} 
        />
      ))}
    </Routes>
  )
}
