import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { TabNavigation } from '../../components/Buttons/Routes/TabNavigation/tabNavigation';

import {
  Container, Title,
} from './favorites.styles';

type Props = {
  navigation:any
}

export function Favorites({ navigation } : Props) {
  const [text, setText] = useState('text')
  // eslint-disable-next-line no-unused-vars

  return (
    <Container style={{ flex: 1 }}>
      <Title>
        Favorites

      </Title>
      <TextInput onChangeText={setText} value={text} />
      <TabNavigation check={2} navigation={navigation} />

    </Container>
  )
}
