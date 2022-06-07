/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unstable-nested-components */
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
import { BannerHomeImage } from '../../components/Carousel/carousel.component';
import { Categories } from '../../components/categories/categories.component';
import { Header } from '../../components/Headers/header.component';
import { ListHeader } from '../../components/ListHeader/listHeader.component';
import { SearchRestaurants } from '../../components/SearchRestaurants/searchRestaurants.component';
import { Load } from '../../components/ViewLoading/viewLoading.component';
import { useAuth } from '../../contexts/auth';
import api from '../../service/api';

import {
  CarouselImg, Container, RestaurantList, ViewLoading,
} from './home.styles';

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

interface RestaurantListProps{
  content: Response[]
}

export function Home() {
  const { authState } = useAuth()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  async function fetchData(onSuccess?: (response: RestaurantListProps) => void) {
    setLoading(true)
    try {
      await api.get<RestaurantListProps>(`/restaurant?page=${page}&quantity=10`, {
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
    <>
      <Container>
        <StatusBar barStyle="dark-content" backgroundColor="#c20c18" />
        <ListHeader />
        <View style={{
          alignItems: 'center', width: '100%', marginTop: 16, paddingBottom: 80,
        }}
        >

          <RestaurantList
            data={data}
            keyExtractor={(item: any) => item.id}
            numColumns={2}
            renderItem={({ item }: any) => (
              <View style={{ flexGrow: 1 }}>
                <CardRestaurant
                  name={item.name}
                  category="pizza"
                  rate={3.2}
                />

              </View>
            )}
            onEndReached={() => handleLoadOnEnd()}
          />
          {loading ? <Load /> : null}
        </View>
      </Container>
    </>
  )
}
