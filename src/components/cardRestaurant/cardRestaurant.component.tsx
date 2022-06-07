/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import React from 'react'
import {
  Container,
  ImageFavorite,
  ImageRate,
  ImageRestaurant,
  RateContainer,
  TextCategories,
  TextInfo,
  TextRate,
  ViewFavorite,
  ViewInfo,
} from './cardRestaurant.styles'

interface Props{
  name: string
  category: string
  rate: number
}

export function CardRestaurant({ name, category, rate } : Props) {
  return (
    <Container>
      <ImageRestaurant
        source={require('../../assets/images/default.png')}
      />
      <ViewFavorite>
        <ImageFavorite
          source={require('../../assets/icons/favoriteRestaurant.png')}
        />
      </ViewFavorite>
      <ViewInfo>
        <TextInfo>{name}</TextInfo>
        <TextCategories>{category}</TextCategories>
        <RateContainer>
          {/* <ImageRate source={require('../../assets/icons/star-rate.png')} /> */}
          <TextRate>{rate}</TextRate>
        </RateContainer>
      </ViewInfo>
    </Container>
  )
}
