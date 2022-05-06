import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { usePost } from '../../service/post';

import {
  Container, Title,
} from './favorites.styles';

export function Favorites() {
  const [text, setText] = useState('text')
  // eslint-disable-next-line no-unused-vars
  const { postData } = usePost('/public/v2/users', text)
  return (
    <Container>
      <Title>
        Favorites

      </Title>
      <TextInput onChangeText={setText} value={text} />

    </Container>
  )
}
