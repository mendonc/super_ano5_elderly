import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const TopSectionContainer = styled.View`
  background-color: #b0d4e3;
  padding-bottom: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 22px; 
  font-weight: bold;
  color: #000; /* Preto para melhor leitura */
  margin: 20px 20px 10px 20px;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #ccc; /* Linha fina preta */
  margin: 10px 20px;
`;

export const FloatingButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #007aff;
  width: 65px;
  height: 65px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: black;
  shadow-offset: 2px 2px;
`;

export const ModalContainer = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
`;

export const OptionButton = styled.TouchableOpacity`
  padding: 14px;
  margin-top: 12px;
  background-color: #e3f2fd;
  border-radius: 8px;
  width: 250px;
  align-items: center;
`;

export const OptionText = styled.Text`
  font-size: 18px;
  color: #000; /* Preto para legibilidade */
  font-weight: bold;
`;
