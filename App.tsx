/* eslint-disable no-unused-vars */
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthContext, { AuthProvider } from './src/contexts/auth';
import AllRoutes from './src/routes/routes.routes';
import RegisterProvider from './src/contexts/register';

export default function App() {
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        {/* <RegisterProvider> */}
        {/* <AuthProvider> */}
        <AllRoutes />
        {/* </AuthProvider> */}
        {/* </RegisterProvider> */}
      </NavigationContainer>
    </View>

  );
}
