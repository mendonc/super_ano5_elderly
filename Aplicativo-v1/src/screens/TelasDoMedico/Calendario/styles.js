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

export const AlertTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 15px 0 10px;
  padding-left: 20px;
`;

export const AppointmentContainer = styled.View`
  background-color: #add8e6;
  border-radius: 10px;
  padding: 15px;
  margin: 10px 20px;
  elevation: 2;
`;

export const AppointmentRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AddButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #add8e6;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  elevation: 5;
`;

export const AddButtonText = styled.Text`
  font-size: 28px;
  color: #FFF;
`;

export const AppointmentType = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const AppointmentTime = styled.Text`
  font-size: 14px;
  color: #333;
  margin-top: 5px;
`;

export const PatientName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
`;

export const ProcedureDescription = styled.Text`
  color: #666;
  font-size: 14px;
  margin-left: 5px; /* Espaço entre tipo e descrição */
`;
