/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/self-closing-comp */
import React, { useContext, useState } from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import { TabNavigation } from '../../components/Buttons/Routes/TabNavigation/tabNavigation';
import AuthContext from '../../contexts/auth';
import { UserContext, UserContextProvider } from '../../contexts/costumerContext';

import {
  Container, Title,
} from './profile.styles';

type Props = {
  navigation: any
}

export function Profile({ navigation }:Props) {
  const { isOpenModal, setIsOpenModal } = useContext(UserContext)
  const { logOut } = useContext(AuthContext)

  return (
    <UserContextProvider>

      <Container style={{ flex: 1 }}>

        <Title>
          Profile
        </Title>
        <Title>
          {isOpenModal ? <Text>ola</Text> : <Text>tchau</Text>}
        </Title>
        <Button title="deslogar" onPress={() => { logOut() }} />

      </Container>
    </UserContextProvider>
  )
}
