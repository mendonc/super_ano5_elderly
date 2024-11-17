import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const SectionTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px 20px 10px;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const IconContainer = styled.View`
  flex-direction: row;
`;

export const SearchInput = styled.TextInput`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 20px;
  font-size: 16px;
  color: #333;
`;

export const PatientCard = styled.View`
  background-color: #dbf0f7;
  border-radius: 10px;
  padding: 15px;
  margin: 10px 20px;
  position: relative;
`;

export const StarIconContainer = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const PatientInfo = styled.View``;

export const PatientName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: #333;
  margin-top: 5px;
`;

export const FilterMenuContainer = styled.View`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 20px;
  elevation: 2;
`;

export const FilterOption = styled.TouchableOpacity`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const ClearFiltersButton = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #ffe5e5;
  align-items: center;
`;
