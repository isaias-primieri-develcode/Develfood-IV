/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Text } from 'react-native';
import * as Yup from 'yup'
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { ButtonLogin } from '../../components/Button/button.component';
import Phone from '../../assets/imageIcons/phone.svg'
import CPF from '../../assets/imageIcons/cpf.svg'
import Name from '../../assets/imageIcons/name.svg'

import Register2Svg from '../../assets/resgister/register2.svg'

import {
  Container, ValueInput, ViewInput,
} from './register.styles';
import { Register3 } from './register.page3';
import { cpf, phoneNumber } from '../../utils/validations';
import { AuthProvider } from '../../contexts/auth';
import { useRegister } from '../../contexts/testeCadastro';

export function Register2() {
  const navigation = useNavigation()
  const loginValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    cpf: Yup.string().required().matches(cpf, 'ex: 123.456.789-00'),
    phone: Yup.string().matches(phoneNumber, 'ex: (DDD) 98765-4321'),
  }).required();
  const { body } = useRegister()

  return (
    <AuthProvider>

      <Container style={{ flex: 1 }}>
        <Register2Svg />
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ name: '', cpf: '', phone: '' }}
          onSubmit={(values) => {
            body.costumer.firstName = values.name
            // body.phone = values.phone
            // body.cpf = values.cpf
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
                <Name style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />
                <ValueInput
                  placeholder="Nome"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  keyboardType="default"
                />

              </ViewInput>
              {(errors.name && touched.name)
                && (
                <Text style={{

                  fontSize: 10,
                  color: 'red',

                }}
                >
                  {errors.name}
                </Text>
                )}
              <ViewInput>
                <Phone style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />
                <ValueInput
                  placeholder="Telefone"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  keyboardType="number-pad"
                />

              </ViewInput>
              {(errors.phone && touched.phone)
                && (
                <Text style={{

                  fontSize: 10,
                  color: 'red',

                }}
                >
                  {errors.phone}
                </Text>
                )}
              <ViewInput>
                <CPF style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />
                <ValueInput
                  placeholder="CPF"
                  onChangeText={handleChange('cpf')}
                  onBlur={handleBlur('cpf')}
                  value={values.cpf}
                  keyboardType="number-pad"
                />

              </ViewInput>
              {(errors.cpf && touched.cpf)
                && (
                <Text style={{

                  fontSize: 10,
                  color: 'red',

                }}
                >
                  {errors.cpf}
                </Text>
                )}

              {values.name !== '' && values.phone !== ''
                ? (
                  <ButtonLogin
                    title="Continuar"
                    activeOpacity={0.8}
                    style={isValid ? { opacity: 1 } : { opacity: 0.6 }}
                    disabled={!isValid}
                    onPress={() => { navigation.navigate('Register3'), handleSubmit() }}
                  />
                )
                : (
                  <>
                    <ButtonLogin
                      style={{ opacity: 0.6 }}
                      title="Continuar"
                      activeOpacity={0.8}
                      disabled
                      onPress={() => { navigation.navigate('Register3'), handleSubmit(), console.log(body) }}
                    />
                    <Text style={{ color: 'red', marginTop: 16 }}>Preencha todos os campos</Text>
                  </>
                )}
            </>
          )}
        </Formik>

      </Container>
    </AuthProvider>
  )
}
