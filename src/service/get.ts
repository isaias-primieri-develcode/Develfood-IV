import { useEffect, useState } from 'react'
import api from './api'

export function useGet<T=unknown>(url:string) {
  const [data, setData] = useState<T>({} as T)
  useEffect(() => {
    async function getData() {
      try {
        await api.get(url).then((response) => setData(response.data))
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { data }
}
