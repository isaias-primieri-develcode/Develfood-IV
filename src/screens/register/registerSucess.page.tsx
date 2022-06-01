/* eslint-disable no-console */
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonLogin } from '../../components/Button/button.component';
import RegisterSucessSvg from '../../assets/resgister/registerSucess.svg'

import {
  Container, TextView, Title,
} from './register.styles';
import api from '../../service/api';

import { useRegister } from '../../contexts/Register';

export function RegisterSucess() {
  const { body } = useRegister()
  const navigation = useNavigation()
  const [status, setStatus] = useState('')

  function HandlePost() {
    api.post('https://develfood-3.herokuapp.com/user', body).then((data) => {
      setStatus(data.statusText)
      console.log(data.statusText)
    })
  }
  function HandleConfirm() {
    if (status === '200') { navigation.navigate('Login') }
    if (status === '409') {
      navigation.navigate('Login')
      Alert.alert('conta ja existente')
    }
  }

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
          HandlePost()
          HandleConfirm()
        }}
      />

    </Container>

  )
}
