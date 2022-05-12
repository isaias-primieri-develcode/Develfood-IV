import React from 'react';
import { TabNavigation } from '../../components/Buttons/Routes/TabNavigation/tabNavigation';

import {
  Container, Title,
} from './favorites.styles';

type Props = {
  navigation:any
}

export function Favorites({ navigation } : Props) {
  // eslint-disable-next-line no-unused-vars

  return (
    <Container style={{ flex: 1 }}>
      <Title>
        Favorites

      </Title>

      <TabNavigation check={2} navigation={navigation} />

    </Container>
  )
}
