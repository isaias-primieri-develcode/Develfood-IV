/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import {
  Button, View,
} from 'react-native';

import { Container } from './home.styles';

interface Data{
  name: string
  email: string
  gender: string
  status: string
}

export function Home() {
  return (

    <Container style={{ flex: 1 }}>

      {/* <FlatList
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
      /> */}

      <View style={{ marginBottom: 60 }}>

        <Button
          color="#f11"
          title="adicionar"
        />
        <Button color="#f11" title="deletar" />
        <Button color="#f11" title="put" />
      </View>

    </Container>
  )
}
