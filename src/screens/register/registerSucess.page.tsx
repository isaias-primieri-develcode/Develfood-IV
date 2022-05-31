/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonLogin } from '../../components/Button/button.component';
import RegisterSucessSvg from '../../assets/resgister/registerSucess.svg'

import {
  Container, TextView, Title,
} from './register.styles';
import api from '../../service/api';

import { Login } from '../Login/login.page';

export function RegisterSucess() {
  const navigation = useNavigation()
  // const {
  //   cep,
  //   city,
  //   cpf,
  //   creationDate,
  //   district,
  //   email,
  //   name,
  //   nickname,
  //   number,
  //   password,
  //   phone,
  //   state,
  //   street,

  // } = useRegister()

  // const handlePost = async () => {
  //   try {
  //     await api.post('/user', {
  //       email,
  //       password,
  //       creationDate,
  //       role: {
  //         id: 2,
  //       },
  //       costumer: {
  //         firstName: name,
  //         lastName: '',
  //         cpf,
  //         phone,
  //         photo: '',
  //         address: [{
  //           street,
  //           number,
  //           neighborhood: district,
  //           city,
  //           zipCode: cep,
  //           state,
  //           nickname,
  //         }],
  //       },
  //     }).then((value) => console.log(value))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <Container style={{ flex: 1 }}>

      <RegisterSucessSvg />

      <Title style={{ color: '#111', fontSize: 32, fontWeight: 'bold' }}>
        Cadastro finalizado!
      </Title>

      <TextView>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
          Parabéns! Agora você pode aproveitar nossas ofertas e serviços e economizar
          com super cupons Develfood.
        </Text>
      </TextView>

      <View style={{ width: 295, alignItems: 'flex-end' }} />

      <ButtonLogin
        title="Concluir"
        activeOpacity={0.8}
          // eslint-disable-next-line max-len
        onPress={() => { navigation.navigate('Login') }}
      />

    </Container>

  )
}
