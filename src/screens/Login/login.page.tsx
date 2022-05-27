/* eslint-disable no-const-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable eqeqeq */
/* eslint-disable yoda */
/* eslint-disable no-cond-assign */
/* eslint-disable object-shorthand */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect, useState } from 'react';
import {
  Alert, Button, Text, TouchableOpacity, View,
} from 'react-native';
import * as Yup from 'yup'
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
import { Routes } from '../../routes/index.routes';
import * as auth from '../../service/auth';
import AuthContext, { AuthProvider, useAuth } from '../../contexts/auth';
import { usePost } from '../../service/post';

interface CreateUserRequest {
  email: string
  password: string
}
interface TResponse {
  token: string
  type: string
}

type Props = {
  navigation:any

}

export function Login({ navigation } : Props) {
  const [error, setError] = useState(false)
  const [check, setCheck] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, seEmail] = useState(String)
  const [password, setPassword] = useState(String)

  const {
    authState, setAuthState, signIn, signed,
  } = useAuth();
  console.log(authState);

  // console.log(signed)

  async function handleSignIn() {
    signIn()
  }

  // function verify() {
  //   if ('@' in ) {
  //     Alert.alert('certo')
  //     console.log('ok')
  //   }
  // }

  const {
    data: dataPost,
    handlerPost,
    error: errorPost,
  } = usePost<CreateUserRequest, TResponse>(
    '/auth',
    {
      email: email,
      password: password,
    },
    undefined,
    (dataReturn) => {
      setAuthState(dataReturn);
      console.log('logado com sucesso');
      navigation.navigate(signIn());
    },
  );

  // const handlePost = () => {
  //   api.post('/auth', {
  //     email,
  //     password,
  //     creationDate: '2022-05-02',
  //     role: {
  //       id: 2,
  //     },
  //   }).then((request) => {
  //     console.log(request.status)
  //     if (request.status === 200) {
  //       // navigation.navigate(Routes)
  //       setError(false)
  //       handleSignIn()
  //     } else {
  //       setError(true)
  //     }
  //   })
  // }

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
            onChangeText={(text:string) => seEmail(text)}
            placeholder="email@example.com"
            keyboardType="email-address"
          />
        )}

      </ViewInput>
      <Text />
      <View>
        {error ? <Text style={{ color: 'red' }}>E-mail ou senha invalidos. Tente novamente!</Text> : null }
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
      {loading ? <ButtonLogin activeOpacity={1} title="Processando..." /> : (
        <ButtonLogin
          title="Entrar"
          activeOpacity={0.8}
          onPress={() => {
            handlerPost(),
            setLoading(true),
            Sleep(4000).then(() => { setError(true), setLoading(false) }),
            Sleep(9000).then(() => { setError(false) })
          }}
        />
      )}

      <TouchableOpacity
        activeOpacity={0.8}
        style={{ flexDirection: 'row' }}
        onPress={() => navigation.navigate(Register1)}
      >
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
