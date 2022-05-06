import React from 'react';
import {
  Button, FlatList, Text, View,
} from 'react-native';
import {
  useDelete, useGet, usePost, usePut,
} from '../../service/apiExports'
import { Container } from './home.styles';

interface Props{
    name: string;
    email: string;
    gender: string;
    status: string;
}
interface Propriedades{
  name: string;
  email: string;
  gender: string;
  status: string;
}

export function Home() {
  const { data } = useGet<Props[]>('/public/v2/users')

  const { data: dataPost, postData } = usePost<Props, Propriedades>('/public/v2/users', {
    email: 'isaias@develcode98498.com',
    name: 'isaias',
    gender: 'male',
    status: 'active',
  }, {
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer fc39eb3e54a3c6ced11e15735c3af526a77efd49d8d91c5d6ab132a61d444758',
    },
  })
  // eslint-disable-next-line no-unused-vars
  const { data: dataDelete, deleteData } = useDelete<Props>('/public/v2/users/7694', {
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer fc39eb3e54a3c6ced11e15735c3af526a77efd49d8d91c5d6ab132a61d444758',
    },
  })
  // eslint-disable-next-line no-unused-vars
  const { data: dataPut, putData } = usePut<Props, Propriedades>('/public/v2/users/7717', {
    email: 'isaias@develcode1728631412.com',
    name: 'isaias',
    gender: 'male',
    status: 'active',
  }, {
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer fc39eb3e54a3c6ced11e15735c3af526a77efd49d8d91c5d6ab132a61d444758',
    },
  })

  return (
    <Container>
      <FlatList
        style={{ height: 256, marginVertical: 30, marginHorizontal: 15 }}
        data={data}
        renderItem={({ item }) => (
          <Text>
            {item.email}
            {item.name}
            {item.gender}
            {item.status}
          </Text>
        )}
      />
      <Text>
        {dataPost.email}

      </Text>
      <View style={{ }}>

        <Button color="#f11" title="adicionar" onPress={() => postData()} />
        <Button color="#f11" title="deletar" onPress={() => deleteData()} />
        <Button color="#f11" title="put" onPress={() => putData()} />
      </View>

    </Container>
  )
}
