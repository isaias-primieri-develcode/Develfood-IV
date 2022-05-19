/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
import React, {
  createContext, ReactNode, useState,
} from 'react';

type UserContextProps = {
  children: ReactNode
}

type UserContextType = {
  isOpenModal: boolean,
  setIsOpenModal: (newState: boolean) => void
  authToken: string,
  setAuthToken: (newState: string) => void
}

const initialValue = {
  isOpenModal: false,
  setIsOpenModal: () => {},
  authToken: '',
  setAuthToken: () => {},

}

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)
  const [authToken, setAuthToken] = useState(initialValue.authToken)

  return (
    <UserContext.Provider value={{
      isOpenModal, setIsOpenModal, authToken, setAuthToken,
    }}
    >
      {children}
    </UserContext.Provider>
  )
}
