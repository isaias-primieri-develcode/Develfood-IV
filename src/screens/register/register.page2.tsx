/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ButtonLogin } from '../../components/Buttons/Button/button.component';
import { Home } from '../Home/home.page';
import MiniLogo from '../../assets/images/miniLogo.svg'
import PizzaPng from '../../assets/images/pizza.png'
import XburguerPng from '../../assets/images/xburguer.png'
import KetchupPng from '../../assets/images/ketchup.png'
import HiddenPassword from '../../assets/imageIcons/hiddenPassword.svg'
import Email from '../../assets/imageIcons/email.svg'
import PasswordDown from '../../assets/imageIcons/password.svg'
import PasswordUp from '../../assets/imageIcons/passwordUp.svg'
import Register2Svg from '../../assets/resgister/register2.svg'

import {
  Container, ValueInput, Ketchup, Pizza, Xburguer, ViewInput, Password,
} from './register.styles';
import api from '../../service/api';
import { Register3 } from './register.page3';

type Props = {
  navigation:any

}

export function Register2({ navigation } : Props) {
  const [error, setError] = useState(false)
  const [check, setCheck] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, seEmail] = useState(String)
  const [password, setPassword] = useState(String)

  const [search, setsearch] = useState()
  const handlePost = () => {
    api.post('/auth', {
      email,
      password,
    }).then((request) => {
      console.log(request.status)
      if (request.status === 200) {
        navigation.navigate(Home)
        setError(false)
      } else {
        setError(true)
      }
    })
  }
  const sleep = (time:any) => new Promise((resolve) => {
    setTimeout(resolve, time)
  })
  return (
    <Container style={{ flex: 1 }}>
      <Register2Svg />

      <ViewInput>
        <Email style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />
        {loading
          ? (
            <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
              Validando
            </Text>
          ) : (
            <ValueInput
              value={search}
              autoCompleteType="name"
              onChangeText={(text:string) => seEmail(text)}
              placeholder="Nome"
              keyboardType="default"
            />
          )}

      </ViewInput>

      <View>
        {error ? <Text style={{ color: 'red' }}>Erro no Login, Tente Novamente</Text> : null }
      </View>

      <ViewInput>
        <Email style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />
        {loading
          ? (
            <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
              Validando
            </Text>
          ) : (
            <ValueInput
              value={search}
              autoCompleteType="cc-number"
              onChangeText={(text:string) => seEmail(text)}
              placeholder="CPF"
              keyboardType="number-pad"
            />
          )}

      </ViewInput>

      <ViewInput>
        <Email style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />
        {loading
          ? (
            <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
              Validando
            </Text>
          ) : (
            <ValueInput
              value={search}
              autoCompleteType="cc-number"
              onChangeText={(text:string) => seEmail(text)}
              placeholder="Telefone"
              keyboardType="number-pad"
            />
          )}

      </ViewInput>

      <View style={{ width: 295, alignItems: 'flex-end' }} />
      {loading ? (
        <ButtonLogin
          activeOpacity={1}
          title="Processando..."
        />
      ) : (
        <ButtonLogin
          title="Continuar"
          activeOpacity={0.8}
          onPress={() => { navigation.navigate(Register3) }}
        />
      )}

    </Container>
  )
}
