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
import Location from '../../assets/imageIcons/location.svg'

import PasswordDown from '../../assets/imageIcons/password.svg'
import PasswordUp from '../../assets/imageIcons/passwordUp.svg'
import Register3Svg from '../../assets/resgister/register3.svg'

import {
  Container, ValueInput, Ketchup, Pizza, Xburguer, ViewInput, Password,
} from './register.styles';
import api from '../../service/api';

type Props = {
  navigation:any

}

export function Register3({ navigation } : Props) {
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
      <Register3Svg />

      <ViewInput>
        <View>
          <Location fill="#000" style={{ position: 'absolute', left: 0, marginHorizontal: 0 }} />

        </View>

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
          onPress={() => { navigation.navigate(Home) }}
        />
      )}

    </Container>
  )
}
