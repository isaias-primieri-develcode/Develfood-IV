/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/self-closing-comp */
import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { TabNavigation } from '../../components/Buttons/Routes/TabNavigation/tabNavigation';
import { UserContext, UserContextProvider } from '../../contexts/costumerContext';

import {
  Container, Title,
} from './profile.styles';

type Props = {
  navigation: any
}

export function Profile({ navigation }:Props) {
  const { isOpenModal, setIsOpenModal } = useContext(UserContext)

  return (
    <UserContextProvider>

      <Container style={{ flex: 1 }}>

        <Title>
          Profile
        </Title>
        <Title>
          {isOpenModal ? <Text>ola</Text> : <Text>tchau</Text>}
        </Title>

      </Container>
    </UserContextProvider>
  )
}
