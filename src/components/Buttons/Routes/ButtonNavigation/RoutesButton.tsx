/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import {
  TouchableOpacity, View, TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {
  Container, Title,
} from './style';

interface Props extends TouchableOpacityProps {
    title: string,
    icon: any,
    // eslint-disable-next-line react/require-default-props
    checked?: boolean

}

export function RoutesButton({
  title, icon, checked, ...rest
} : Props) {
  return (
    <Container>
      <TouchableOpacity
        {...rest}
        activeOpacity={0.75}
      >
        <View style={{ alignItems: 'center' }}>
          {icon}
        </View>
        <View>
          <Title>
            {checked ? title : null}
          </Title>
        </View>
      </TouchableOpacity>
    </Container>
  )
}
