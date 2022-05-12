/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { ScreenStackHeaderConfig } from 'react-native-screens';
// import Icon from 'react-native-vector-icons/Feather';
import RNBootSplash from 'react-native-bootsplash'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home/home.page';
import { Profile } from '../screens/Profile/profile.page';
import { Historic } from '../screens/Historic/historic.page';
import { Favorites } from '../screens/Favorites/favorites.page';
import { Login } from '../screens/Login/login.page';

const Stack = createNativeStackNavigator()

export function Routes() {
  useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])
  return (

    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false, animation: 'fade' }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false, animation: 'fade' }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false, animation: 'fade' }}
        name="Favorites"
        component={Favorites}
      />
      <Stack.Screen
        options={{ headerShown: false, animation: 'fade' }}
        name="Historic"
        component={Historic}
      />
      <Stack.Screen
        options={{ headerShown: false, animation: 'fade' }}
        name="Profile"
        component={Profile}
      />

    </Stack.Navigator>

  );
}
