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

import {
  Container, ValueInput, Ketchup, Pizza, Xburguer, ViewInput, Password,
} from './login.styles';
import api from '../../service/api';
import { Register1 } from '../register/register.page1';
import { Sleep } from '../../utils/sleep';

type Props = {
  navigation:any

}

export function Login({ navigation } : Props) {
  const [error, setError] = useState(false)
  const [check, setCheck] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, seEmail] = useState(String)
  const [password, setPassword] = useState(String)

  const handlePost = () => {
    api.post('/auth', {
      email,
      password,
      creationDate: '2022-05-02',
      role: {
        id: 2,
      },
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
        {loading ? <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>Validando</Text> : (
          <ValueInput
            autoCompleteType="email"
            defaultValue="exemplo@email.co"
            onChangeText={(text:string) => seEmail(text)}
            placeholder="email@example.com"
            keyboardType="email-address"
          />
        )}

      </ViewInput>
      <View>
        {error ? <Text style={{ color: 'red' }}>Erro no Login, Tente Novamente</Text> : null }
      </View>

      <ViewInput>
        <Password style={{ alignItems: 'center' }}>
          <PasswordDown />
        </Password>

        {check
          ? (
            <HiddenPassword
              style={{
                position: 'absolute', right: 0, marginHorizontal: 10, backgroundColor: '#55a2', borderRadius: 8,
              }}
              onPress={() => { setCheck(!check) }}
            />
          )
          : (
            <HiddenPassword
              style={{ position: 'absolute', right: 0, marginHorizontal: 10 }}
              onPress={() => { setCheck(!check) }}
            />
          )}

        {loading ? <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>Validando</Text> : (
          <ValueInput
            placeholder="Senha"
            defaultValue="12345"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!check}

          />

        )}
      </ViewInput>
      <View style={{ width: 295, alignItems: 'flex-end' }}>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={{ paddingTop: 12, fontWeight: 'bold', color: '#68484A' }}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>

      </View>
      {loading ? <ButtonLogin activeOpacity={1} title="Processando..." /> : <ButtonLogin title="Entrar" activeOpacity={0.8} onPress={() => { handlePost(), setLoading(true), Sleep(4000).then(() => { setError(true), setLoading(false) }), Sleep(5500).then(() => { setError(false) }) }} />}

      <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row' }} onPress={() => navigation.navigate(Register1)}>
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
