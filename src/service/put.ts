/* eslint-disable no-console */
import { AxiosRequestConfig } from 'axios'
import { useState } from 'react'
import api from './api'

// eslint-disable-next-line max-len
export function usePut<T=unknown, Tresponse=unknown>(url:string, body: T, options?: AxiosRequestConfig) {
  const [data, setData] = useState<Tresponse>({} as Tresponse)

  async function putData() {
    try {
      await api.put(url, body, options).then((response) => setData(response.data))
      console.log(data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return { data, putData }
}
