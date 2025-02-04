import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  position: relative;
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
  color: #ffffff;
  
`;

export const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 50px; /* Move o container para a direita */
  width: 100%;
  top: 20px;
`;

export const SearchInput = styled.TextInput`
  background-color: rgb(221, 230, 235);
  border-radius: 15px;
  padding: 20px; 
  margin: 10px 20px;
  font-size: 25px;
  width: 83%;
  top: -40px;
  color: #000; /* Garante que o texto seja visível */
`;

export const MedicamentoCard = styled.View`
  background-color: #e6f7ff;
  border-radius: 10px;
  padding: 70px;
  margin: 10px 20px;
  width: 90%
  font-size: 18px;
  color: #000000;
`;

export const MedicamentoName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 10px;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: #555;
  margin-top: 5px;
`;

export const FilterMenuContainer = styled.View`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 20px;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
`;

export const FilterOption = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.active ? '#dbf0f7' : '#fff')};
  border: 1px solid ${(props) => (props.active ? '#007BFF' : '#ddd')};
`;

export const ClearFiltersButton = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 10px;
  background-color: #ffe5e5;
  lign-items: center;
  justify-content: center;
  border: 1px solid #ffcccc;
`;

export const NameText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color:rgb(255, 255, 255);
  margin-bottom: 0px; /* Espaço abaixo do nome */
  position: absolute;
  top: 40px;
  alignItems: center;
  justifyContent: center;
  textAlign: center;
  width:100%;
  margin: 0px 0px;
`;

export const ListMedicConteiner = styled.SafeAreaView`
  margin: 10px 10px;
  top: 150px;
  position: absolute;
`;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        height: 60,
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    searchInput: {
        margin: 10,
        padding: 10,
        borderRadius: 25,
        backgroundColor: '#fff',
        fontSize: 16,
        elevation: 2,
    },
    listContainer: {
        padding: 10,
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonContainer: {
        padding: 10,
        backgroundColor: '#b0d4e3',
    },
});

export default styles;
