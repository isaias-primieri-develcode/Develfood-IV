import styled from 'styled-components/native';

export const Container = styled.View`
background-color: #fff;
justify-content: center;
align-items:center ;
flex: 1;

`;

export const Title = styled.Text`
font-size: 16px;

`;

export const Xburguer = styled.Image`
position: absolute;
left: 0;
top: 0;

`;

export const Pizza = styled.Image`
position: absolute;
right: 0;

top: 0;

`;

export const Ketchup = styled.Image`
position: absolute;

bottom: 0;

`;
export const ValueInput = styled.TextInput`
  width: 200;
  height: 50;
  border-radius: 10;
  margin-left: 36;
  border-color: #BFBABA;
  align-items: center;
  justify-content: center;

`;

export const ViewInput = styled.View`

  width: 295;
  height: 50;
  border-radius: 10;
  margin-top: 12px;
  border: 1px;
  background-color: rgba(255,255,255, 0.7);
  border-color: #BFBABA;
  align-items: flex-start;
  justify-content: center;

`;

export const Password = styled.View`
  width: 18;
  height: 22;
  margin: 12px;
  position: absolute;
  align-items: flex-start;
  justify-content: center;

`;
