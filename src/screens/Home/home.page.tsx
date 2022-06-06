/* eslint-disable no-return-await */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import { useFocusEffect } from '@react-navigation/native';
import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import {
  Button,
  FlatList, Image, StatusBar, Text, View,
} from 'react-native';
import Carousel from '../../assets/homeImages/Carousel.png'
import { CardRestaurant } from '../../components/cardRestaurant/cardRestaurant.component';
import { Categories } from '../../components/categories/categories.component';
import { Header } from '../../components/Headers/header.component';
import { useAuth } from '../../contexts/auth';
import api from '../../service/api';

import { Container } from './home.styles';

interface Data{
  name: string
  email: string
  gender: string
  status: string
}

interface Response{
    id: number
  name: string
  // eslint-disable-next-line camelcase
  photo: string}

interface RestaurantList{
  content: Response[]
}

export function Home() {
  const { authState } = useAuth()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  async function fetchData(onSuccess?: (response: Response) => void) {
    setLoading(true)
    try {
      await api.get<RestaurantList>(`/restaurant?page=${page}&quantity=10`, {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      }).then((response: any) => {
        setData(response.data)
        // eslint-disable-next-line no-unused-expressions
        onSuccess && onSuccess(response.data)
      })
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  function onSucces(response: any) {
    setData([...data, ...response.content] as never)
  }

  async function loadRestaurants() {
    await fetchData(onSucces);
    setPage(1);
  }

  async function handleLoadOnEnd() {
    await fetchData(onSucces);
    setPage(page + 1);
  }

  useFocusEffect(useCallback(() => { fetchData(); setData([]); loadRestaurants() }, []));

  return (

    <Container style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#c20c18" />

      <Header color="#c20c18" name="Home" />
      <Image source={Carousel} style={{ marginTop: 60, width: '100%' }} />
      <Categories />

      <FlatList
        style={{ height: 206, width: '100%' }}
        data={data}
        keyExtractor={(item: any) => item.id}
        numColumns={2}
        renderItem={({ item }: any) => (
          <View style={{ flexDirection: 'row' }}>
            <CardRestaurant
              name={item.name}
              category="pizza"
              rate={3.2}
            />

          </View>
        )}
        onEndReached={() => handleLoadOnEnd()}
      />
    </Container>
  )
}
