import { Route, Routes } from 'react-router-dom'
import HomeLayout from './modules/pages/home/Main'

export const RoutesHandler = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />} />
    </Routes>
  )
}
