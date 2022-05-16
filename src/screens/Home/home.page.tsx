/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Button, FlatList, Text, View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TabNavigation } from '../../components/Buttons/Routes/TabNavigation/tabNavigation';
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
  const { data, loading, error } = useGet<Data[]>('/public/v2/users')

  // setinfo(infor)

  const handlePost = () => {
    api.post('/public/v2/users', {
      email: 'isatrets@develcode.com',
      name: 'ytrias',
      gender: 'male',
      status: 'active',
    }, {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer fc39eb3e54a3c6ced11e15735c3af526a77efd49d8d91c5d6ab132a61d444758',
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
      email: 'loadvs@develcode.com',
      name: 'ytrisfdsas',
      gender: 'male',
      status: 'active',
    }, {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer fc39eb3e54a3c6ced11e15735c3af526a77efd49d8d91c5d6ab132a61d444758',
      },
    })
  }

  return (
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

      <TabNavigation check={1} navigation={navigation} />

    </Container>
  )
}
