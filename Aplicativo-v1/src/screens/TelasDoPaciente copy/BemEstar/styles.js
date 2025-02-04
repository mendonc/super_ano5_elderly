import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const TopSectionContainer = styled.View`
  background-color: #b0d4e3;
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const HumorContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const HumorText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #000;
`;

export const HojeEstouText = styled.Text`
  font-size: 18px;
  color: #000;
  margin-top: 5px;
`;

export const IconContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const EmotionLabel = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  margin-top: 5px;
`;

export const EmojiSelectionContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const NextButton = styled.TouchableOpacity`
  background-color: #dbf0f7;
  padding: 10px 20px;  /* Menor padding para diminuir a largura */
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  align-self: center;  /* Centraliza o botão */
  margin-top: 10px;
  width: auto;  /* Ajusta o tamanho conforme o conteúdo */
  min-width: 120px; /* Define um tamanho mínimo */
`;

export const NextButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
