import { useState } from 'react'
import { API } from '../services/API'
import { CategorieApiResponse } from '../services/servicesTypes'
import { useFetchCategoryReturn } from './hooksTypes'


export const useFetchCategory = () => {
  const [data, setData] = useState<useFetchCategoryReturn>({
    cascos: null,
    auriculares: null,
    parlantes: null
  })
  const getData = (category: string) => {
    if(typeof category === 'string') {
      API.getCategory(category)
      .then((res: CategorieApiResponse) => {
        setData({
          ...data,
          [category]: res
        })
      })
    }
  }
  return { data, getData }
}
