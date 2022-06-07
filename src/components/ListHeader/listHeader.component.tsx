import React from 'react';
import { View } from 'react-native';
import { BannerHomeImage } from '../Carousel/carousel.component';
import { Categories } from '../categories/categories.component';
import { Header } from '../Headers/header.component';
import { SearchRestaurants } from '../SearchRestaurants/searchRestaurants.component';

export function ListHeader() {
  return (
    <View style={{ position: 'relative', top: 0, height: 300 }}>

      <Header color="#c20c18" name="rua Arcy da Nobrega 667, Panazollo" />
      <BannerHomeImage />
      <Categories />
      <SearchRestaurants />

    </View>
  );
}
