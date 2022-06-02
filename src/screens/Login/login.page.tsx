/* eslint-disable no-console */
import React, { useState } from 'react';
import * as yup from 'yup'
import {
  Alert,
  Text, TouchableOpacity, View,
} from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { ButtonLogin } from '../../components/Button/button.component';
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
import { useAuth } from '../../contexts/auth';

export interface IUsuario {
  email: string;
  password: string;
  id: number
}

export function Login() {
  const [check, setCheck] = useState(false)
  const navigation = useNavigation()
  const {
    setSigned, signed, setAuthState, setUser,
  } = useAuth();

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Por favor adicione um e-mail')
      .required('Endereço de e-mail obrigatório'),
    password: yup
      .string()
      .min(6, ({ min }) => `A senha deve ter no minimo ${min} caracteres`)
      .required('Senha obrigatória'),

  })
  const login = async (data: IUsuario) => {
    try {
      const response = await api.post('/auth', data);
      const user = {
        token: response.data.token,
        email: data.email,
        password: data.password,
      }
      if (response.status === 200) {
        console.log('sim')
        setSigned(true);
        console.log(signed)
        setAuthState(response.data);
        setUser(user)
      } else {
        console.log('nao')
        console.log(response.status)
      }
    } catch (error) {
      Alert.alert('Usuário não encontrado!');
    }
  };

  return (
    <Container style={{ flex: 1 }}>
      <Pizza source={PizzaPng} />
      <Xburguer source={XburguerPng} />
      <Ketchup source={KetchupPng} />
      <MiniLogo />
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values)
          login({
            email: values.email,
            password: values.password,
            id: 1,
          })
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>

            <ViewInput>
              <Email style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />
              <ValueInput
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />

            </ViewInput>
            {(errors.email && touched.email)
                  && (
                  <Text style={{

                    fontSize: 10,
                    color: 'red',

                  }}
                  >
                    {errors.email}
                  </Text>
                  )}

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
              <ValueInput
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={!check}
              />

            </ViewInput>
            <View style={{ width: 295, alignItems: 'flex-end' }}>
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={{ paddingTop: 12, fontWeight: 'bold', color: '#68484A' }}>
                  Esqueci minha senha
                </Text>
              </TouchableOpacity>

            </View>
            {(errors.password && touched.password)
                  && (
                  <Text style={{
                    fontSize: 10,
                    color: 'red',
                  }}
                  >
                    {errors.password}
                  </Text>
                  )}
            {values.password !== '' && values.email !== ''
              ? (
                <ButtonLogin
                  title="Continuar"
                  activeOpacity={0.8}
                  style={isValid ? { opacity: 1 } : { opacity: 0.6 }}
                  disabled={!isValid}
                  onPress={() => { handleSubmit() }}
                />
              )
              : (
                <ButtonLogin
                  style={{ opacity: 0.6 }}
                  title="Continuar"
                  activeOpacity={0.8}
                  disabled
                  onPress={() => { handleSubmit() }}
                />
              )}
          </>
        )}
      </Formik>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ flexDirection: 'row' }}
        onPress={() => navigation.navigate('Register1')}
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
