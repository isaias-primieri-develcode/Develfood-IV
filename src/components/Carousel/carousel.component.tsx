import React from 'react'
import { ScrollView } from 'react-native'
import theme from '../../global/theme'
import {
  Container,
  ImageBanner,

} from './carousel.component.styles'

export function BannerHomeImage() {
  return (
    <Container>
      <ScrollView
        scrollEventThrottle={3}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <ImageBanner
          source={theme.icons.prato1}
        />
        <ImageBanner
          source={theme.icons.prato2}
        />
        <ImageBanner
          source={theme.icons.prato3}
        />
      </ScrollView>
    </Container>
  )
}
