/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
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

type Props = {
  navigation:any

}

export function Register1({ navigation } : Props) {
  const [error, setError] = useState(false)
  const [check, setCheck] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, seEmail] = useState(String)
  const [password, setPassword] = useState(String)

  return (
    <Container style={{ flex: 1 }}>
      <Register1Svg />

      <ViewInput>
        <Email style={{ position: 'absolute', left: 0, marginHorizontal: 10 }} />
        {loading
          ? (
            <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
              Validando
            </Text>
          ) : (
            <ValueInput
              autoCompleteType="email"
              onChangeText={(text:string) => seEmail(text)}
              placeholder="email@example.com"
              keyboardType="email-address"
            />
          )}

      </ViewInput>

      <View>
        {error ? <Text style={{ color: 'red' }}>Erro no Login, Tente Novamente</Text> : null }
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
            placeholder="Senha"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!check}
          />

        )}
      </ViewInput>

      <ViewInput>
        <Password style={{ alignItems: 'center' }}>
          <PasswordDown />
        </Password>
        {loading ? (
          <Text style={{ fontSize: 14, marginLeft: 40, color: 'green' }}>
            Validando
          </Text>
        ) : (
          <ValueInput
            placeholder="Confirmar Senha"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!check}
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
          onPress={() => { navigation.navigate(Register2) }}
        />
      )}

    </Container>
  )
}
