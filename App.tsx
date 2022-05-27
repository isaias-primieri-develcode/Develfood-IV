/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { StatusBar, View } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { UserContextProvider } from './src/contexts/costumerContext';
import { Routes } from './src/routes/index.routes';
import { LoginRoutes } from './src/routes/login.routes';
import AuthContext, { AuthProvider } from './src/contexts/auth';
import AllRoutes from './src/routes/routes.routes';
import RegisterContext, { RegisterProvider } from './src/contexts/register';
// import { AppRoutes } from './src/routes/appRoutes';

axios.get('https://api.github.com/users/isaias-primieri-develcode')

export default function App() {
  // const { signed } = useContext(AuthContext)
  const { signed } = useContext(AuthContext)
  return (
    <UserContextProvider>
      <View style={{ height: '100%', width: '100%' }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <NavigationContainer>
          <RegisterProvider>
            <AuthProvider>
              <AllRoutes />
            </AuthProvider>
          </RegisterProvider>
        </NavigationContainer>
      </View>
    </UserContextProvider>
  );
}
