/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import * as auth from '../service/auth';

interface AuthContextData{
  signed: boolean,
  user: object | null,
  signIn() : Promise<void>
  logOut() : void
  token: string

}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null)
  const [token, setToken] = useState('')

  useEffect(() => {
    async function LoadedStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@Develfood-IV:user')
      const storagedToken = await AsyncStorage.getItem('@Develfood-IV:token')
      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser))
      }
    }
    LoadedStoragedData()
  }, [])
  function logOut() {
    AsyncStorage.clear().then(
      () => {
        setUser(null)
      },
    )
  }

  async function signIn() {
    const response = await auth.signIn()
    setUser(response.user)
    AsyncStorage.setItem('@Develfood-IV:user', JSON.stringify(response.user))
    AsyncStorage.setItem('@Develfood-IV:token', response.token)
  }
  return (
    <AuthContext.Provider value={{
      signed: !!user, user, signIn, logOut, token,
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
