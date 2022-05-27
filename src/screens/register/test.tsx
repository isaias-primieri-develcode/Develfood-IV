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
  StyleSheet,
  Text, TextInput, View,
} from 'react-native';
import { Formik } from 'formik'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
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

type Props = {
  navigation:any

}

export function RegisterTest({ navigation } : Props) {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })
  const styles = StyleSheet.create({
    loginContainer: {
      width: '80%',
      alignItems: 'center',
      padding: 10,
      elevation: 10,
      backgroundColor: '#e6e6e6',
    },
    errorText: {
      fontSize: 10,
      color: 'red',
    },
    textInput: {
      height: 40,
      width: '100%',
      margin: 10,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
    },
  })

  return (
    <UserContextProvider>

      <View style={styles.loginContainer}>
        <Text>Login Screen</Text>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
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
              <TextInput
                name="email"
                placeholder="Email Address"
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {/* {errors.email
         && <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>} */}
              {(errors.email && touched.email)
                  && <Text style={styles.errorText}>{errors.email}</Text>}
              <TextInput
                name="password"
                placeholder="Password"
                style={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {/* {errors.password
         && <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>} */}
              {(errors.password && touched.password)
                  && <Text style={styles.errorText}>{errors.password}</Text>}
              <Button
                onPress={handleSubmit}
                title="LOGIN"
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
      </View>
    </UserContextProvider>
  )
}
