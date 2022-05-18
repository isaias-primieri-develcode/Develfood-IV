/* eslint-disable react/function-component-definition */
import React, {
  createContext, ReactNode, useState,
} from 'react';

type UserContextProps = {
  children: ReactNode
}

type UserContextType = {
  isOpenModal: boolean,
  authToken: string,
  // eslint-disable-next-line no-unused-vars
  setIsOpenModal: (newState: boolean) => void
}

const initialValue = {
  authToken: '',
  isOpenModal: false,
  setIsOpenModal: () => {},

}

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)
  const authToken = 'Bearer fc39eb3e54a3c6ced11e15735c3af526a77efd49d8d91c5d6ab132a61d444758'

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ isOpenModal, setIsOpenModal, authToken }}>
      {children}
    </UserContext.Provider>
  )
}
