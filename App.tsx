/* eslint-disable no-unused-vars */
import React from 'react';
import { StatusBar, View } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { UserContextProvider } from './src/contexts/costumerContext';
import { Routes } from './src/routes/index.routes';
import { LoginRoutes } from './src/routes/login.routes';
// import { AppRoutes } from './src/routes/appRoutes';

axios.get('https://api.github.com/users/isaias-primieri-develcode')

export default function App() {
  return (
    <UserContextProvider>

      <View style={{ height: '100%', width: '100%' }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <NavigationContainer>
          <LoginRoutes />

        </NavigationContainer>
      </View>

    </UserContextProvider>
  );
}
