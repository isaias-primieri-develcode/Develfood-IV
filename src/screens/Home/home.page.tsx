/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import {
  Button, FlatList, Text, View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TabNavigation } from '../../components/Buttons/Routes/TabNavigation/tabNavigation';
import { UserContext, UserContextProvider } from '../../contexts/costumerContext';
import api from '../../service/api';
import { useGet } from '../../service/get';

import { Container } from './home.styles';

type PropsN={
  navigation: any
}
interface Data{
  name: string
  email: string
  gender: string
  status: string
}

export function Home({ navigation } : PropsN) {
  const { data, loading, error } = useGet<Data[]>('/auth')

  // setinfo(infor)

  const handlePost = () => {
    api.post('/user', {

      email: 'testerdddcostumer2@email.com',
      password: '123456',
      creationDate: '2022-05-02',
      role: {
        id: 3,
      },
      costumer: {
        firstName: 'firstName',
        lastName: 'lastName',
        cpf: '234.567.434-04',
        phone: '(12)997485733',
        photo: '',
        address: [{
          street: 'Rua Alemanha',
          number: '34',
          neighborhood: 'Jardim das Nações',
          city: 'Taubaté',
          zipCode: '12040808',
          state: 'SP',
          nickname: 'Casa',
        }],
      },

    })
  }
  const handleDelete = () => {
    api.delete('/public/v2/users/7747', {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer fc39eb3e54a3c6ced11e15735c3af526a77efd49d8d91c5d6ab132a61d444758',
      },
    })
  }
  const handlePut = () => {
    api.put('/public/v2/users/9018', {
      email: 'tentativa1@email.com',
      password: '123456',
      creationDate: '2022-05-02',
      role: {
        id: 2,
      },
      costumer: {
        firstName: 'firstName',
        lastName: 'lastName',
        cpf: '098.7654.321-00',
        phone: '(12)997485733',
        photo: '',
        address: [
          {
            street: 'Rua lasanha',
            number: '348',
            neighborhood: 'Jardim das rações',
            city: 'Tabuanopé',
            zipCode: '11140808',
            state: 'SP',
            nickname: 'Casa',
          },
        ],
      },

    }, {
      headers: {
        'Content-type': 'application/json',
        Authorization: authToken,
      },
    })
  }

  const { authToken } = useContext(UserContext)

  return (
    <UserContextProvider>

      <Container style={{ flex: 1 }}>

        <FlatList
          style={{ height: 206, marginVertical: 30, marginHorizontal: 15 }}
          data={data}
          renderItem={({ item }) => (
            <View style={{
              borderWidth: 2, padding: 4, margin: 2, borderRadius: 2,
            }}
            >
              <Text>
                {item.email}
              </Text>

              <Text>
                {item.name}
              </Text>
              <Text>
                {item.gender}
              </Text>
              <Text>
                {item.status}
              </Text>

            </View>
          )}
        />

        <View style={{ marginBottom: 60 }}>

          <Button
            color="#f11"
            title="adicionar"
            onPress={() => handlePost()}
          />
          <Button color="#f11" title="deletar" onPress={() => handleDelete()} />
          <Button color="#f11" title="put" onPress={() => handlePut()} />
        </View>

      </Container>
    </UserContextProvider>
  )
}
