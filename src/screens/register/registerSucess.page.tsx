/* eslint-disable no-console */
import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonLogin } from '../../components/Button/button.component';
import RegisterSucessSvg from '../../assets/resgister/registerSucess.svg'

import {
  Container, TextView, Title,
} from './register.styles';

export function RegisterSucess() {
  const navigation = useNavigation()

  return (
    <Container style={{ flex: 1 }}>

      <RegisterSucessSvg />

      <Title style={{ color: '#111', fontSize: 32, fontWeight: 'bold' }}>
        Cadastro finalizado!
      </Title>

      <TextView>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
          Parabéns! Agora você pode aproveitar nossas ofertas e serviços e economizar
          com super cupons Develfood.
        </Text>
      </TextView>

      <View style={{ width: 295, alignItems: 'flex-end' }} />

      <ButtonLogin
        title="Concluir"
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Login')
        }}
      />

    </Container>

  )
}
