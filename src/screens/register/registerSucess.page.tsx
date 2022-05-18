/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonLogin } from '../../components/Buttons/Button/button.component';
import { Home } from '../Home/home.page';
import HiddenPassword from '../../assets/imageIcons/hiddenPassword.svg'
import Email from '../../assets/imageIcons/email.svg'
import PasswordDown from '../../assets/imageIcons/password.svg'
import RegisterSucessSvg from '../../assets/resgister/registerSucess.svg'

import {
  Container, ValueInput, ViewInput, TextView, Password, Title,
} from './register.styles';
import api from '../../service/api';
import { Register2 } from './register.page2';

type Props = {
  navigation:any

}

export function RegisterSucess({ navigation } : Props) {
  const [error, setError] = useState(false)
  const [check, setCheck] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, seEmail] = useState(String)
  const [password, setPassword] = useState(String)

  const sleep = (time:any) => new Promise((resolve) => {
    setTimeout(resolve, time)
  })
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
      {loading ? (
        <ButtonLogin
          activeOpacity={1}
          title="Processando..."
        />
      ) : (
        <ButtonLogin
          title="Concluir"
          activeOpacity={0.8}
          onPress={() => { navigation.navigate(Register2) }}
        />
      )}

    </Container>
  )
}
