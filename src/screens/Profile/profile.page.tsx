import React from 'react';
import { TabNavigation } from '../../components/Buttons/Routes/TabNavigation/tabNavigation';

import {
  Container, Title,
} from './profile.styles';

type Props = {
  navigation: any
}

export function Profile({ navigation }:Props) {
  return (
    <Container style={{ flex: 1 }}>
      <Title>
        Profile
      </Title>
      <TabNavigation check={4} navigation={navigation} />

    </Container>
  )
}
