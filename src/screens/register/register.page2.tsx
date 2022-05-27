/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonLogin } from '../../components/Buttons/Button/button.component';
import Phone from '../../assets/imageIcons/phone.svg'
import CPF from '../../assets/imageIcons/cpf.svg'
import Name from '../../assets/imageIcons/name.svg'

import PasswordDown from '../../assets/imageIcons/password.svg'
import Register2Svg from '../../assets/resgister/register2.svg'

import {
  Container, ValueInput, Ketchup, Pizza, Xburguer, ViewInput, Password,
} from './register.styles';
import api from '../../service/api';
import { Register3 } from './register.page3';
import { UserContextProvider } from '../../contexts/costumerContext';
import { useRegister } from '../../contexts/register';
import { phoneNumber } from '../../utils/validations';

type Props = {
  navigation:any

}

export function Register2({ navigation } : Props) {
  const [error, setError] = useState(true)
  const [check, setCheck] = useState(false)
  const [loading, setLoading] = useState(false)
  const { newName, setNewName } = useRegister()
  const { newCPF, setNewCPF } = useRegister()
  const { newPhone, setNewPhone } = useRegister()

  const schema = Yup.object({
    newName: Yup.string().required().email(),
    newCPF: Yup.string().required().min(4),
    newPhone: Yup.string().matches(phoneNumber),
  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [search, setsearch] = useState()

  const handlePost = () => {
    console.log(
      'nome:',
      newName,
      'CPF:',
      newCPF,
      'telefone:',
      newPhone,
    )
  }
  // if (newName && newCPF && newPhone) {
  //   setError(false)
  // }

  return (
    <UserContextProvider>
      <Container style={{ flex: 1 }}>
        <Register2Svg />

        <ViewInput>
          <Name style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />
          {loading
            ? (
              <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
                Validando
              </Text>
            ) : (
              <ValueInput
                value={search}
                autoCompleteType="name"
                onChangeText={(text:string) => setNewName(text)}
                placeholder="Nome"
                keyboardType="default"
              />
            )}

        </ViewInput>

        <ViewInput>
          <CPF style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />
          {loading
            ? (
              <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
                Validando
              </Text>
            ) : (
              <ValueInput
                value={search}
                autoCompleteType="cc-number"
                onChangeText={(text:string) => setNewCPF(text)}
                placeholder="CPF"
                keyboardType="number-pad"
              />
            )}

        </ViewInput>

        <ViewInput>
          <Phone style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />
          {loading
            ? (
              <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
                Validando
              </Text>
            ) : (
              <ValueInput
                value={search}
                autoCompleteType="cc-number"
                onChangeText={(text:string) => setNewPhone(text)}
                placeholder="Telefone"
                keyboardType="number-pad"
              />
            )}

        </ViewInput>

        <View style={{ width: 295, alignItems: 'flex-end' }} />
        {newName && newCPF && newPhone ? (
          <ButtonLogin
            title="Continuar"
            activeOpacity={0.8}
            onPress={() => { navigation.navigate(Register3), handlePost() }}
          />
        ) : (
          <View style={{
            marginTop: 12,
            borderRadius: 8,
            borderColor: '#bbb',
            borderWidth: 1,
            width: 295,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',

          }}
          >
            <Text style={{
              color: 'red',
              fontSize: 14,
            }}
            >
              Todos os campos são obrigatórios
            </Text>
          </View>

        )}

      </Container>
    </UserContextProvider>
  )
}
