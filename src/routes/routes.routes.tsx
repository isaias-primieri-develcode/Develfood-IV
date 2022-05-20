/* eslint-disable react/function-component-definition */
/* eslint-disable padded-blocks */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';
import { Routes } from './index.routes';
import { LoginRoutes } from './login.routes';

const AllRoutes: React.FC = () => {
  const { signed } = useContext(AuthContext)
  return signed ? <Routes /> : <LoginRoutes />

}
export default AllRoutes
