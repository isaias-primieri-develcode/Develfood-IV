/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Text } from 'react-native';
import { TabNavigation } from '../../components/Buttons/Routes/TabNavigation/tabNavigation';
import { UserContext, UserContextProvider } from '../../contexts/costumerContext';

import {
  Container, Title,
} from './favorites.styles';

type Props = {
  navigation:any
}

export function Favorites({ navigation } : Props) {
  // eslint-disable-next-line no-unused-vars
  const { isOpenModal, setIsOpenModal } = useContext(UserContext)

  return (
    <UserContextProvider>

      <Container style={{ flex: 1 }}>
        <Button title="add" onPress={() => setIsOpenModal(!isOpenModal)} />

        <Title>

          Favorites
        </Title>
        <Title>
          {isOpenModal ? <Text>ola</Text> : <Text>tchau</Text>}
        </Title>

      </Container>
    </UserContextProvider>
  )
}
