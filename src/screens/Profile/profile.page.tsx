/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/self-closing-comp */
import React, { useContext, useState } from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import AuthContext from '../../contexts/auth';

import {
  Container, Title,
} from './profile.styles';

export function Profile() {
  const { logOut } = useContext(AuthContext)

  return (

    <Container style={{ flex: 1 }}>

      <Title>
        Profile
      </Title>
      <Button title="deslogar" onPress={() => { logOut() }} />

    </Container>
  )
}
