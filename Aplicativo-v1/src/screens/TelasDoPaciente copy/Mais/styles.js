import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  background-color: #ffffff;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #333333;
`;

export const Icon = styled.Text`
  font-size: 16px;
  color: #333333;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #e0e0e0;
  margin: 0 20px;
`;
