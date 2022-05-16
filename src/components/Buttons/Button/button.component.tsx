import {
  View, TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {
  Button,
  Container, Title,
} from './button.style';

interface Props extends TouchableOpacityProps {
    title: string,
}

export function ButtonLogin({ title, ...rest } : Props) {
  return (
    <Container>
      <Button
        {...rest}

      >
        <View>
          <Title>
            {title}
          </Title>
        </View>
      </Button>
    </Container>
  )
}
