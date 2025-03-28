import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin: 20px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  margin: 10px 20px;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const ListContainer = styled.View`
  margin: 10px 10px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: white;
  padding: 20px;
  width: 80%;
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  height: 40px;
  border-color: #ccc;
  border-width: 1px;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-left: 8px;
  color: black
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #007aff;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  width: 48%;
`;

export const ModalButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
