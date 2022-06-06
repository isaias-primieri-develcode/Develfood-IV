/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React from 'react'
import {
  Container,
  ImageSearch,
  InputRestaurants,
  TextInputMod,
  ViewSearch,
} from './searchRestaurants.style.component'

interface InputProps {
  onTouch?: any
}

export function SearchRestaurants({ onTouch }: InputProps) {
  return (
    <Container>
      <InputRestaurants>
        <ViewSearch>
          {/* <ImageSearch source={require('../../assets/icons/search-icon.png')} /> */}
        </ViewSearch>
        <TextInputMod placeholder="Buscar restaurantes" />
      </InputRestaurants>
    </Container>
  )
}
