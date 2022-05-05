import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native-svg'
import { Container } from './closeButton.style'

export function closeButton() {
  return (
    <Container>
      <TouchableOpacity>
        <Text>
          bottao
        </Text>
      </TouchableOpacity>

    </Container>
  )
}
