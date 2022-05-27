/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useContext, useState,
} from 'react';

interface RegisterContextData{
  error: boolean
  setError: React.Dispatch<React.SetStateAction<boolean>>
  newEmail: string,
  setNewEmail:React.Dispatch<React.SetStateAction<string>>
  newPassword: string
  setNewPassword:React.Dispatch<React.SetStateAction<string>>
  newName: string
  setNewName:React.Dispatch<React.SetStateAction<string>>
  newCPF: string
  setNewCPF:React.Dispatch<React.SetStateAction<string>>
  newPhone:string
  setNewPhone:React.Dispatch<React.SetStateAction<string>>
  newStreet: string
  setNewStreet:React.Dispatch<React.SetStateAction<string>>
  newCity: string
  setNewCity:React.Dispatch<React.SetStateAction<string>>
  newDistrict: string
  setNewDistrict:React.Dispatch<React.SetStateAction<string>>
  newNumber:string
  setNewNumber:React.Dispatch<React.SetStateAction<string>>
  newCEP:string
  setNewCEP:React.Dispatch<React.SetStateAction<string>>
}

const RegisterContext = createContext<RegisterContextData>({} as RegisterContextData)
export const RegisterProvider: React.FC = ({ children }) => {
  const [error, setError] = useState(Boolean)

  const [newEmail, setNewEmail] = useState(String)
  const [newPassword, setNewPassword] = useState(String)
  const [newName, setNewName] = useState(String)
  const [newCPF, setNewCPF] = useState(String)
  const [newPhone, setNewPhone] = useState(String)
  const [newStreet, setNewStreet] = useState(String)
  const [newCity, setNewCity] = useState(String)
  const [newDistrict, setNewDistrict] = useState(String)
  const [newNumber, setNewNumber] = useState(String)
  const [newCEP, setNewCEP] = useState(String)

  return (
    <RegisterContext.Provider value={{
      error,
      setError,
      newEmail,
      setNewEmail,
      newPassword,
      setNewPassword,
      newName,
      setNewName,
      newCPF,
      setNewCPF,
      newPhone,
      setNewPhone,
      newStreet,
      setNewStreet,
      newCity,
      setNewCity,
      newDistrict,
      setNewDistrict,
      newNumber,
      setNewNumber,
      newCEP,
      setNewCEP,

    }}
    >
      {children}
    </RegisterContext.Provider>
  )
}
export function useRegister() {
  const context = useContext(RegisterContext)
  return context
}

export default RegisterContext
