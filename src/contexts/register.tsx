// /* eslint-disable no-unused-vars */
// /* eslint-disable no-console */
// /* eslint-disable react/function-component-definition */
// /* eslint-disable react/jsx-no-constructed-context-values */
// import React, { createContext, useContext, useState } from 'react';

// interface UserData {
//   createUserAccount: Function;
//   loading: boolean;
//   handleSetPostData: (_postData: CreateUserPost) => void;
//   postData: CreateUserPost;
// }

// interface CreateUserAddress {
//   street: string;
//   number: string;
//   neighborhood: string;
//   city: string;
//   zipCode: string;
//   state: string;
//   nickname: string;
// }

// interface CreateUserPost {
//   email: string;
//   password: string;
//   creationDate: Date;
//   role?: {
//     id: number;
//   };
//   costumer?: {
//     firstName?: string;
//     lastName?: string;
//     cpf?: string;
//     phone?: string;
//     photo?: string;
//     address?: CreateUserAddress[];
//   };
// }

// const RegisterContext = createContext<UserData>({} as UserData)

// export const RegisterProvider: React.FC = ({ children }) => {
//   const [loading, setLoading] = useState(true)
//   const createUserAccount = () => {

//   }

//   return (
//     <RegisterContext.Provider value={{
//       createUserAccount,
//       loading,
//       postData,
//       handleSetPostData,
//     }}
//     >
//       {children}
//     </RegisterContext.Provider>
//   )
// }
// export function useRegister() {
//   const context = useContext(RegisterContext)
//   return context
// }

// export default RegisterContext
