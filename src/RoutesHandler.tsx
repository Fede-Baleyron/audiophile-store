import { Route, Routes } from 'react-router-dom'
import { HeadphonesLayout } from './modules/pages/headphones/HeadPhonesLayout'
import { SpeakersLayout } from './modules/pages/speakers/SpeakersLayout'
import HomeLayout from './modules/pages/home/Main'
import { EarphonesLayout } from './modules/pages/earphones/EarphonesLayout'


export const RoutesHandler = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />} />
      <Route path='/categorias/cascos' element={<HeadphonesLayout />} />
      <Route path='/categorias/auriculares' element={<EarphonesLayout />} />
      <Route path='/categorias/parlantes' element={<SpeakersLayout />} />
    </Routes>
  )
}
