/* eslint-disable keyword-spacing */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import * as yup from 'yup'
import {
  Button,
  Text, View,
} from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Formik } from 'formik';
import { ButtonLogin } from '../../components/Buttons/Button/button.component';
import { Home } from '../Home/home.page';
import HiddenPassword from '../../assets/imageIcons/hiddenPassword.svg'
import Email from '../../assets/imageIcons/email.svg'
import PasswordDown from '../../assets/imageIcons/password.svg'
import Register1Svg from '../../assets/resgister/register1.svg'

import {
  Container, ValueInput, ViewInput, Password,
} from './register.styles';
import api from '../../service/api';
import { Register2 } from './register.page2';
import { UserContextProvider } from '../../contexts/costumerContext';
import { useRegister } from '../../contexts/register';
import { RegisterTest } from './test';
import { Sleep } from '../../utils/sleep';
import { AuthProvider } from '../../contexts/auth';

type Props = {
  navigation:any

}

export function Register1({ navigation } : Props) {
  const [check, setCheck] = useState(Boolean)
  const [loading, setLoading] = useState(false)
  const { error, setError } = useRegister()
  const { newEmail, setNewEmail } = useRegister()
  const { newPassword, setNewPassword } = useRegister()
  const [verifyNewPassword, setVerifyNewPassword] = useState(String)
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })

  const handlePost = () => {
    console.log(
      'email:',
      newEmail,
      'senha:',
      newPassword,
    )
  }

  return (
    <UserContextProvider>
      <AuthProvider>

        <Container style={{ flex: 1 }}>
          <Register1Svg />
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => { setNewEmail(values.email), setNewPassword(values.password), console.log(values) }}
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
                  {loading
                    ? (
                      <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
                        Validando
                      </Text>
                    ) : (
                      <ValueInput
                        placeholder="Email Address"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                      />
                    )}

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

                <View>
                  {error ? <Text style={{ color: 'red' }}>Erro no Cadastro, Tente Novamente</Text> : null }
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
                  {loading ? (
                    <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
                      Validando
                    </Text>
                  ) : (
                    <ValueInput
                      placeholder="Password"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry={!check}
                    />

                  )}
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
                <ViewInput style={verifyNewPassword === values.password ? { backgroundColor: '#55ff5520' } : { backgroundColor: '#ff555520' }}>
                  <Password style={{ alignItems: 'center' }}>
                    <PasswordDown />
                  </Password>

                  <ValueInput
                    placeholder="Confirmar Senha"
                    onChangeText={(text) => setVerifyNewPassword(text)}
                    secureTextEntry={!check}
                  />
                </ViewInput>
                <ButtonLogin
                  title="Continuar"
                  activeOpacity={0.8}
                  disabled={!isValid || (verifyNewPassword === newPassword)}
                  onPress={() => { navigation.navigate(RegisterTest), handleSubmit(), Sleep(2000).then(handlePost) }}
                />
              </>
            )}
          </Formik>

        </Container>
      </AuthProvider>
    </UserContextProvider>
  )
}
