/* eslint-disable no-unused-vars */
import React from 'react';
import { View } from 'react-native';
import { HomeButton } from '../../components/Buttons/Routes/HomeButton/homeButton';

import {
  Container, Title,
} from './historic.styles';

export function Historic() {
  return (
    <Container>
      <View>
        <HomeButton />
      </View>
    </Container>
  )
}
