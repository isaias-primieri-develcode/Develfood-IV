/* eslint-disable react/function-component-definition */
import React, {
  createContext, ReactNode, useState,
} from 'react';

type UserContextProps = {
  children: ReactNode
}

type UserContextType = {
  isOpenModal: boolean,
  // eslint-disable-next-line no-unused-vars
  setIsOpenModal: (newState: boolean) => void
}

const initialValue = {
  isOpenModal: false,
  setIsOpenModal: () => {},

}

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </UserContext.Provider>
  )
}
