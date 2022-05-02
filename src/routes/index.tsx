import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { ScreenStackHeaderConfig } from 'react-native-screens';
// import Icon from 'react-native-vector-icons/Feather';
import { Image, Text, View } from 'react-native';
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
import { Styles } from './style';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarStyle: {
    backgroundColor: '#fff',
    height: 100,
    width: '100%',
    position: 'relative',
    borderTopWidth: 4,
    borderTopColor: '#eaeaea',
  },
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
};

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        {...{ screenOptions }}

      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={Styles.Container}>
                <View style={Styles.Icons}>
                  {
                  focused ? <HomeActiveIcon /> : <HomeIcon />
                }
                </View>
                <View style={Styles.TextContainer}>
                  {focused ? null : <Text style={Styles.Text}>Home</Text> }
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen

          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={Styles.Container}>
                <View style={Styles.Icons}>
                  {
                focused ? <FavoritesActiveIcon /> : <FavoritesIcon />
              }
                </View>
                <View style={Styles.TextContainer}>

                  {focused ? null : <Text style={Styles.Text}>Favorites</Text> }
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Historic"
          component={Historic}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={Styles.Container}>
                <View style={Styles.Icons}>
                  {
                focused ? <HistoricActiveIcon /> : <HistoricIcon />
              }
                </View>
                <View style={Styles.TextContainer}>

                  {focused ? null : <Text style={Styles.Text}>Historic</Text> }
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={Styles.Container}>
                <View style={Styles.Icons}>
                  {
                focused ? <ProfileActiveIcon /> : <ProfileIcon />
              }
                </View>
                <View style={Styles.TextContainer}>

                  {focused ? null : <Text style={Styles.Text}>Profile</Text> }
                </View>
              </View>
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
