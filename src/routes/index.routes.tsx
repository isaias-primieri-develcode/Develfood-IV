/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RNBootSplash from 'react-native-bootsplash'
import { Text, View } from 'react-native';
import HomeIcon from '../assets/icons/home.svg'
import FavoritesIcon from '../assets/icons/favorites.svg'
import FavoritesActiveIcon from '../assets/icons/favoritesActive.svg'
import ProfileIcon from '../assets/icons/profile.svg'
import HomeActiveIcon from '../assets/icons/homeActive.svg'
import ProfileActiveIcon from '../assets/icons/profileActive.svg'
import HistoricIcon from '../assets/icons/historic.svg';
import HistoricActiveIcon from '../assets/icons/historicActive.svg';
import { Styles } from './style.routes';
import { Home } from '../screens/Home/home.page';
import { Favorites } from '../screens/Favorites/favorites.page';
import { Historic } from '../screens/Historic/historic.page';
import { Profile } from '../screens/Profile/profile.page';

const Tab = createBottomTabNavigator();

export function Routes() {
  useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          width: '100%',
          position: 'relative',
          borderTopWidth: 4,
          borderTopColor: '#eaeaea',
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <View style={Styles.Container}>
              <View style={Styles.Icons}>
                {
                  focused ? <HomeActiveIcon /> : <HomeIcon />
                }
              </View>
              <View style={Styles.TextContainer}>
                {focused ? null : <Text style={Styles.Text}>Inicío</Text> }
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <View style={Styles.Container}>
              <View style={Styles.Icons}>
                {
                focused ? <FavoritesActiveIcon /> : <FavoritesIcon />
              }
              </View>
              <View style={Styles.TextContainer}>

                {focused ? null : <Text style={Styles.Text}>Favoritos</Text> }
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Historic"
        component={Historic}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <View style={Styles.Container}>
              <View style={Styles.Icons}>
                {
                focused ? <HistoricActiveIcon /> : <HistoricIcon />
              }
              </View>
              <View style={Styles.TextContainer}>

                {focused ? null : <Text style={Styles.Text}>Histórico</Text> }
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <View style={Styles.Container}>
              <View style={Styles.Icons}>
                {
                focused ? <ProfileActiveIcon /> : <ProfileIcon />
              }
              </View>
              <View style={Styles.TextContainer}>

                {focused ? null : <Text style={Styles.Text}>Perfil</Text> }
              </View>
            </View>
          ),
        }}
      />

    </Tab.Navigator>
  );
}
