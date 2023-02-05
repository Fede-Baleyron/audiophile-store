import { lazy } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { AppLayout } from './AppLayout'
const HeadphonesLayout = lazy(() => import('./modules/pages/headphones/HeadphonesLayout'))
const SpeakersLayout = lazy(() => import('./modules/pages/speakers/SpeakersLayout'))
const EarphonesLayout = lazy(() => import('./modules/pages/earphones/EarphonesLayout'))
const DynamicProduct = lazy(() => import('./modules/pages/dynamic-product/Main'))
const HomeLayout = lazy(() => import('./modules/pages/home/Main'))


export const RoutesHandler = () => {
  return (
    <Routes>
      <Route element={<AppLayout><Outlet /></AppLayout>}>
        <Route path='/' element={<HomeLayout />} />
          <Route path='/categorias/cascos' element={<HeadphonesLayout />} />
          <Route path='/categorias/auriculares' element={<EarphonesLayout />} />
          <Route path='/categorias/parlantes' element={<SpeakersLayout />} />
          <Route path='/categorias/:category/:product' element={<DynamicProduct />} />
      </Route>
    </Routes>
  )
}
