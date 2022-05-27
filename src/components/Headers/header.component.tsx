import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  BackButton, Container, TextView, Title,
} from './header.component.style';
import BackSvg from '../../assets/imageIcons/back.svg'

interface Props extends TouchableOpacityProps {
  color: string
  name: string
}

export function Header({
  color, name, ...rest
} : Props) {
  return (
    <Container style={{ backgroundColor: color }}>
      <BackButton {...rest}>
        <BackSvg />
      </BackButton>
      <TextView>
        <Title>
          {name}
        </Title>
      </TextView>
    </Container>
  )
}
