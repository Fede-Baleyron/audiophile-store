import { Outlet, Route, Routes } from 'react-router-dom'
import { HeadphonesLayout } from './modules/pages/headphones/HeadPhonesLayout'
import { SpeakersLayout } from './modules/pages/speakers/SpeakersLayout'
import { EarphonesLayout } from './modules/pages/earphones/EarphonesLayout'
import { AppLayout } from './AppLayout'
import HomeLayout from './modules/pages/home/Main'


export const RoutesHandler = () => {
  return (
    <Routes>
      <Route element={<AppLayout><Outlet /></AppLayout>}>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/categorias/cascos' element={<HeadphonesLayout />} />
        <Route path='/categorias/auriculares' element={<EarphonesLayout />} />
        <Route path='/categorias/parlantes' element={<SpeakersLayout />} />
      </Route>
    </Routes>
  )
}
