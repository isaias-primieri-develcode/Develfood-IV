import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  align-self: center;
`

export const InputRestaurants = styled.View`
  height: ${RFValue(50)}px;
  width: 339px;
  border: ${RFValue(1)}px;
  border-color: #bfbaba;
  border-radius: 10px;
  flex-direction: row;
`
export const ImageSearch = styled.Image`
  margin-left: ${RFValue(17)}px;
  margin-top: ${RFValue(13.79)}px;
  margin-right: ${RFValue(13.79)}px;
`
export const ViewSearch = styled.View``
export const TextInputMod = styled.TextInput`

  width: ${RFValue(285)}px;
`