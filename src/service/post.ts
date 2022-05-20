/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import { Alert } from 'react-native';
import api from './api';

export function usePost<T = unknown, TResponse = unknown>(
  url: string,
  body: T,
  options?: AxiosRequestConfig,
  onSuccess?: (response: TResponse) => void,
  onError?: Function,
) {
  const navigation = useNavigation();
  const [data, setData] = useState<TResponse>({} as TResponse);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | unknown | null>(null);

  async function handlerPost() {
    setLoading(true);
    try {
      const response = await api.post<TResponse>(url, body, options);
      setData(response.data);
      console.log(response.data);
      onSuccess && onSuccess(response.data);
    } catch (error) {
      console.log(error);
      setError(error);
      onError && onError(error);
    }
    setLoading(false);
  }

  return {
    data, handlerPost, loading, error,
  };
}
