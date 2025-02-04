import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color:rgb(255, 255, 255); /* Fundo branco */
  position: left;
`;

export const SecondConteiner= styled.SafeAreaView`
  padding: 10px 100px;
  margin: 0px -20px; /* Espaçamento interno e externo */
  justify-content: left;
  position: absolute;
  width: 100%
`;

export const PrincipalTopic = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color:rgb(0, 0, 0);
  text-align: left;
  top: -150px;
  right: 90px;
  paddingTop: -10px;
  marginHorizontal: 150px;
`;

export const TopSectionContainer = styled.View`
  background-color: #b0d4e3; /* Azul claro */
  padding: 30px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ConsultConteiner = styled.View`
  border-radius: 10px;
  padding: 10px 100px;
  margin: 220px 10px; /* Espaçamento interno e externo */
  position: absolute;
  align-items: left;
  width: 80%;
`;

export const MedicamenConteiner = styled.View`
  border-radius: 10px;
  padding: 10px 100px;
  margin: 400px 10px; /* Espaçamento interno e externo */
  justify-content: center;
  position: absolute;
  align-items: absolute;
`;

export const MedicamConteiner = styled.View`
  border-radius: 10px;
  padding: 100px 0px;
  margin: 300px 20px; /* Espaçamento interno e externo */
  justify-content: center;
  position: absolute;
  width: 90%
`;

export const AlertTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: black;
  margin-top: 5px; /* Espaçamento entre as informações */
  margin: 5px -85px;
`;

export const MediTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: black;
  margin-top: 5px; /* Espaçamento entre as informações */
  margin: 7px -85px;
`;

export const Exametitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-top: 5px; /* Espaçamento entre as informações */
  margin: 10px;
`;

export const MedicTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-top: 5px; /* Espaçamento entre as informações */
  margin: 10px;
`;

export const AlertContainer = styled.View`
  border-radius: 10px;
  padding: 80px 0px;
  margin: 130px 20px; /* Espaçamento interno e externo */
  justify-content: center;
  position: absolute;
  width: 90%
`;

export const NameText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color:rgb(255, 255, 255);
  margin-bottom: 0px; /* Espaço abaixo do nome */
  position: absolute;
  top: 30px;
  right: 140px;
  text-align: left;
`;

export const MedicText = styled.Text`
  font-size: 16px;
  color: #000000;
  marginTop: -15px; /* Espaçamento entre as informações */
  margin: 10px;
`;

export const TipoPerfil = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 9px; /* Espaço abaixo do nome */
  position: absolute;
  top: 60px;
  right: 245px;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: #000000;
  marginTop: -15px; /* Espaçamento entre as informações */
  margin: 10px;
`;

export const Saudacao  = styled.Text`
  font-size: 40px;
  color: #000000;
  margin: 15px 10px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  top: -15px;
`;

export const AlertIconContainer = styled.View`
  position: absolute;
  top: 10px;
  right: 10px; /* Posiciona o ícone no canto superior direito */
`;

export const DateContainer = styled.View`
  background-color: #dbf0f7;
  border-radius: 10px;
  padding: 15px;
  margin: -1px 0px;
  position: Center; /* Necessário para posicionar o ícone dentro do container */
`;

export const DateText = styled.Text`
  color:rgb(0, 0, 0);
  font-size: 28px;
  font-weight: 300;
  font-family: 'sans-serif-light'; 
  margin: 25px 20px;
  justify-content: center;
  align-items: center;
  top: -55px;
  right: 9px;
`;
export const HeaderContainer = styled.View`
  background-color: #25306b; /* Verde escuro */
  padding: 55px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const IconContainer = styled.View`
  top: 0px;
  right: 40px;
`;