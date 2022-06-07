import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
/* justify-content: center; */
flex: 1;
/* align-items:center ; */

`;

export const CarouselImg = styled.Image`
 margin-top: 60px;
 width: 100%;
 position: absolute;

`;

export const Title = styled.Text`
font-size: 20px;

`;

export const RestaurantList = styled.FlatList`
/* height: 206px; */
width: ${RFValue(337)}px;
align-self: center;

`;
export const ViewLoading = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;
  justify-content: center;
`
