/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useContext } from 'react';
import { Alert } from 'react-native';
// import { usePost } from '../services/post';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface Props {
  createUserAccount: Function;
  loading: boolean;
  handleSetPostData: (_postData: CreateUserPost) => void;
  postData: CreateUserPost;
}

interface CreateUserAddress {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  zipCode: string;
  state: string;
  nickname: string;
}

interface CreateUserPost {
  email: string;
  password: string;
  creationDate: Date;
  role?: {
    id: number;
  };
  costumer?: {
    firstName?: string;
    lastName?: string;
    cpf?: string;
    phone?: string;
    photo?: string;
    address?: CreateUserAddress[];
  };
}

const createUser = createContext({
  loading: false,
  createUserAccount: () => {},
  handleSetPostData: (_postData: Partial<CreateUserPost>) => {},
  postData: {} as CreateUserPost,
} as Props);

function CreateUserProvider({ children }: AuthProviderProps) {
  const { handlerPost, loading } = usePost<CreateUserPost, any>('/user');

  const [postData, setPostData] = useState<CreateUserPost>(
    {} as CreateUserPost,
  );

  function handleSetPostData(dataPost: CreateUserPost) {
    setPostData({ ...postData, ...dataPost });
  }

  const createUserError = (error: any) => {
    Alert.alert(
      'Erro',
      error.response.data.status === 409
        ? 'Dados inválidos'
        : error.response.data.message,
    );
  };

  async function createUserAccount(
    createUserSuccess: () => void,
    requestData: CreateUserPost,
  ) {
    const createUserRequest: CreateUserPost = {
      ...requestData,
      role: { id: 2 },
    };
    await handlerPost(createUserRequest, createUserError, createUserSuccess);
  }

  return (
    <createUser.Provider
      value={{
        createUserAccount, loading, handleSetPostData, postData,
      }}
    >
      {children}
    </createUser.Provider>
  );
}

function useCreateUser() {
  const Context = useContext(createUser);

  return Context;
}

export { useCreateUser, CreateUserProvider };
