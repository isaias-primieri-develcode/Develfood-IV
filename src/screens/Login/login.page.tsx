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

import {
  Container, ValueInput, Ketchup, Pizza, Xburguer, ViewInput, Password,
} from './login.styles';
import api from '../../service/api';

type Props = {
  navigation:any

}

export function Login({ navigation } : Props) {
  const [error, setError] = useState(false)
  const [check, setcheck] = useState(false)
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

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

  return (
    <Container style={{ flex: 1 }}>
      <Pizza source={PizzaPng} />

      <Xburguer source={XburguerPng} />

      <Ketchup source={KetchupPng} />

      <MiniLogo />

      <ViewInput>
        <Email style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />
        <ValueInput
          value={search}
          autoCompleteType="email"
          onChangeText={(text) => setemail(text)}
          placeholder="email@example.com"
          keyboardType="email-address"
        />
      </ViewInput>
      <View>
        {error ? <Text style={{ color: 'red' }}>Erro no Login, Tente Novamente</Text> : null }
      </View>

      <ViewInput>
        <Password style={{ alignItems: 'center' }}>
          <PasswordUp />
          <PasswordDown />
        </Password>

        <HiddenPassword style={{ position: 'absolute', right: 0, marginHorizontal: 10 }} onPress={() => { setcheck(!check) }} />
        <ValueInput placeholder="******" onChangeText={(text) => setpassword(text)} secureTextEntry={!check} />
      </ViewInput>
      <View style={{ width: 295, alignItems: 'flex-end' }}>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={{ paddingTop: 12, fontWeight: 'bold', color: '#68484A' }}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>

      </View>

      <ButtonLogin title="Entrar" onPress={() => { handlePost(), setError(true) }} />
      <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row' }}>
        <Text style={{ paddingTop: 16, fontWeight: 'bold', color: '#68484A' }}>
          Não possui cadastro?
          {' '}
        </Text>
        <Text style={{ paddingTop: 16, fontWeight: 'bold', color: '#cf2323' }}>
          Cadastre-se aqui!
        </Text>

      </TouchableOpacity>

    </Container>
  )
}
