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
import ProfileIcon from '../assets/icons/profile.svg';
import ProfileActiveIcon from '../assets/icons/profileActive.svg';
import HomeIcon from '../assets/icons/home.svg';
import HomeActiveIcon from '../assets/icons/homeActive.svg';
import FavoritesIcon from '../assets/icons/favorites.svg';
import FavoritesActiveIcon from '../assets/icons/favoritesActive.svg';
import HistoricIcon from '../assets/icons/historic.svg';
import HistoricActiveIcon from '../assets/icons/historicActive.svg';
import { Styles } from './style.routes';

const Stack = createNativeStackNavigator()

export function Routes() {
  useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])
  return (

    <Stack.Navigator defaultScreenOptions={{ headerShown: false, animation: 'fade' }}>
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
