/* eslint-disable no-unused-vars */
import React from 'react';
import { View } from 'react-native';
import { RoutesButton } from '../../components/Buttons/Routes/ButtonNavigation/RoutesButton';
import { TabNavigation } from '../../components/Buttons/Routes/TabNavigation/tabNavigation';
import { Favorites } from '../Favorites/favorites.page';
import { Home } from '../Home/home.page';
import { Profile } from '../Profile/profile.page';

import {
  Container, Title,
} from './historic.styles';

type Props = {
  navigation:any
}

export function Historic({ navigation } : Props) {
  return (
    <Container style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TabNavigation check={3} navigation={navigation} />
      </View>
    </Container>
  )
}
