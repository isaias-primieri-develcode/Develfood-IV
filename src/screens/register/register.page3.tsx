/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonLogin } from '../../components/Buttons/Button/button.component';
import { Home } from '../Home/home.page';
import {
  Container, ValueInput, Ketchup, Pizza, Xburguer, ViewInput, Password,
} from './register.styles';
import { RegisterSucess } from './registerSucess.page';

import Location from '../../assets/imageIcons/location.svg'
import Register3Svg from '../../assets/resgister/register3.svg'

import api from '../../service/api';
import { UserContextProvider } from '../../contexts/costumerContext';

type Props = { navigation:any }

export function Register3({ navigation } : Props) {
  const [error, setError] = useState(false)
  const [check, setCheck] = useState(false)
  const [loading, setLoading] = useState(false)
  const [newStreet, setNewStreet] = useState(String)
  const [newCity, setNewCity] = useState(String)
  const [newDistrict, setNewDistrict] = useState(String)
  const [newNumber, setNewNumber] = useState(String)
  const [newCEP, setNewCEP] = useState(String)

  const [search, setsearch] = useState()

  const handlePost = () => {
    console.log(
      'rua:',
      newStreet,
      'cidade:',
      newCity,
      'bairro:',
      newDistrict,
      'numero:',
      newNumber,
      'CEP:',
      newCEP,
    )
    const address = {
      street: newStreet,
      number: newNumber,
      neighborhood: newDistrict,
      city: newCity,
      zipCode: newCEP,
      state: 'SP',
      nickname: 'Casa',
    }
  }

  return (

    <UserContextProvider>
      <Container style={{ flex: 1 }}>
        <Register3Svg />

        <ViewInput>

          <Location style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />

          {loading
            ? (
              <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
                Validando
              </Text>
            ) : (
              <ValueInput
                value={search}
                autoCompleteType="street-address"
                onChangeText={(text:string) => setNewStreet(text)}
                placeholder="Rua"
                keyboardType="default"
              />
            )}
        </ViewInput>

        <ViewInput>

          <Location style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />

          {loading
            ? (
              <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
                Validando
              </Text>
            ) : (
              <ValueInput
                value={search}
                autoCompleteType="street-address"
                onChangeText={(text:string) => setNewCity(text)}
                placeholder="Cidade"
                keyboardType="default"
              />
            )}
        </ViewInput>

        <ViewInput>

          <Location style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />

          {loading
            ? (
              <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
                Validando
              </Text>
            ) : (
              <ValueInput
                value={search}
                autoCompleteType="street-address"
                onChangeText={(text:string) => setNewDistrict(text)}
                placeholder="Bairro"
                keyboardType="default"
              />
            )}
        </ViewInput>

        <ViewInput>

          <Location style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />

          {loading
            ? (
              <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
                Validando
              </Text>
            ) : (
              <ValueInput
                value={search}
                autoCompleteType="street-address"
                onChangeText={(text:string) => setNewNumber(text)}
                placeholder="Numero"
                keyboardType="number-pad"
              />
            )}
        </ViewInput>

        <ViewInput>

          <Location style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />

          {loading
            ? (
              <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
                Validando
              </Text>
            ) : (
              <ValueInput
                value={search}
                autoCompleteType="street-address"
                onChangeText={(text:string) => setNewCEP(text)}
                placeholder="CEP"
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
            onPress={() => { navigation.navigate(RegisterSucess), handlePost() }}
          />
        )}

      </Container>
    </UserContextProvider>
  )
}
