/* eslint-disable no-console */
import { AxiosRequestConfig } from 'axios'
import { useState } from 'react'
import api from './api'

// eslint-disable-next-line max-len
export function useDelete<Tresponse=unknown>(url:string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<Tresponse>({} as Tresponse)

  async function deleteData() {
    try {
      await api.delete(url, options).then((response) => setData(response.data))
      console.log('Deletedo com sucesso')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return { data, deleteData }
}
