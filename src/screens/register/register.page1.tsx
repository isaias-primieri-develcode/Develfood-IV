/* eslint-disable no-console */
import React, { useState } from 'react';
import * as yup from 'yup'
import {
  Text, View,
} from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { ButtonLogin } from '../../components/Button/button.component';
import HiddenPassword from '../../assets/imageIcons/hiddenPassword.svg'
import Email from '../../assets/imageIcons/email.svg'
import PasswordDown from '../../assets/imageIcons/password.svg'
import Register1Svg from '../../assets/resgister/register1.svg'

import {
  Container, ValueInput, ViewInput, Password,
} from './register.styles';
import { useRegister } from '../../contexts/Register';

export function Register1() {
  const [check, setCheck] = useState(Boolean)
  const { body } = useRegister()
  const navigation = useNavigation()
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Por favor adicione um e-mail')
      .required('Endereço de e-mail obrigatório'),
    password: yup
      .string()
      .min(6, ({ min }) => `A senha deve ter no minimo ${min} caracteres`)
      .oneOf([yup.ref('password_confirm'), null], 'as senhas devem ser iguais')
      .required('Senha obrigatória'),
    password_confirm: yup
      .string()
      .min(6, ({ min }) => `A senha deve ter no minimo ${min} caracteres`)
      .required('Password confirm is required'),

  })

  return (
    <Container style={{
      flex: 1,
      height: '100%',
      justifyContent: 'flex-start',
    }}
    >
      <View style={{ height: 30 }} />
      <Register1Svg />
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          email: '',
          password: '',
          password_confirm: '',
        }}
        onSubmit={(values) => {
          body.email = values.email
          body.password = values.password
          console.log(body)
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
              <Email style={{
                position: 'absolute',
                left: 0,
                marginHorizontal: 10,
              }}
              />
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
                      position: 'absolute',
                      right: 0,
                      marginHorizontal: 10,
                      backgroundColor: '#55a2',
                      borderRadius: 8,
                    }}
                    onPress={() => { setCheck(!check) }}
                  />
                )
                : (
                  <HiddenPassword
                    style={{
                      position: 'absolute',
                      right: 0,
                      marginHorizontal: 10,
                    }}
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
            <ViewInput>
              <Password style={{ alignItems: 'center' }}>
                <PasswordDown />
              </Password>
              <ValueInput
                onChangeText={handleChange('password_confirm')}
                onBlur={handleBlur('password_confirm')}
                value={values.password_confirm}
                secureTextEntry={!check}
                placeholder="Confirmar Senha"
              />
            </ViewInput>
            {values.password !== '' && values.email !== ''
              ? (
                <ButtonLogin
                  title="Continuar"
                  activeOpacity={0.8}
                  style={isValid ? { opacity: 1 } : { opacity: 0.6 }}
                  disabled={!isValid}
                  onPress={() => {
                    navigation.navigate('Register2')
                    handleSubmit()
                  }}
                />
              )
              : (
                <>
                  <ButtonLogin
                    style={{ opacity: 0.6 }}
                    title="Continuar"
                    activeOpacity={0.8}
                    disabled
                  />
                  <Text style={{ color: 'red', marginTop: 16 }}>
                    Preencha todos os campos

                  </Text>
                </>
              )}
          </>
        )}
      </Formik>
    </Container>
  )
}
