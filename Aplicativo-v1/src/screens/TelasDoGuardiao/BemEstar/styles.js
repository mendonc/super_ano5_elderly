import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f9f9f9;
`;

export const TopSectionContainer = styled.View`
  background-color: #b0d4e3; /* Azul claro */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const AlertTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #25306b;
  margin: 20px;
`;

export const AlertContainer = styled.View`
  background-color: #dbf0f7; /* Azul claro */
  border-radius: 10px;
  padding: 15px;
  margin: 10px 20px; /* Espaçamento interno e externo */
  position: relative; /* Necessário para posicionar o ícone dentro do container */
`;

export const NameText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #25306b;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: #333;
  margin-top: 5px;
`;

export const AlertIconContainer = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
`;
