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

type Props = {
  navigation:any

}

export function Register2({ navigation } : Props) {
  const [error, setError] = useState(false)
  const [check, setCheck] = useState(false)
  const [loading, setLoading] = useState(false)
  const [newName, setNewName] = useState(String)
  const [newCPF, setNewCPF] = useState(String)
  const [newPhone, setNewPhone] = useState(String)

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

        <View>
          {error ? <Text style={{ color: 'red' }}>Erro no Login, Tente Novamente</Text> : null }
        </View>

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
        {loading ? (
          <ButtonLogin
            activeOpacity={1}
            title="Processando..."
          />
        ) : (
          <ButtonLogin
            title="Continuar"
            activeOpacity={0.8}
            onPress={() => { navigation.navigate(Register3), handlePost() }}
          />
        )}

      </Container>
    </UserContextProvider>
  )
}
