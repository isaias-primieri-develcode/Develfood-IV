/* eslint-disable global-require */
import React from 'react';
import LottieView from 'lottie-react-native'
// eslint-disable-next-line import/no-unresolved
import splashScreen from '../assets/splash/splashScreen.json'
import { Container, Title } from './style';

export function Splash() {
  return (
    <Container>
      <Title>
        Develfood
      </Title>
      <LottieView source={splashScreen} autoPlay loop={false} />
    </Container>
  )
}
