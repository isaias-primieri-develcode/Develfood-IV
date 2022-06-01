/* eslint-disable no-unused-expressions */
/* eslint-disable react/function-component-definition */
/* eslint-disable padded-blocks */
/* eslint-disable no-undef */
import React from 'react';
import { useAuth } from '../contexts/auth';
import { Routes } from './index.routes';
import { LoginRoutes } from './login.routes';

const AllRoutes: React.FC = () => {
  const { signed } = useAuth()

  return signed ? <Routes /> : <LoginRoutes />

}
export default AllRoutes
