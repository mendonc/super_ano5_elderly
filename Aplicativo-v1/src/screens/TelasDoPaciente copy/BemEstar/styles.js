import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color:rgb(255, 255, 255); /* Fundo branco */
  position: left;
`;

export const SecondConteiner= styled.SafeAreaView`
  flex: 1;
  background-color:rgb(58, 24, 24); /* Fundo branco */
  position: left;
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

export const Consultconteiner = styled.View`
  border-radius: 10px;
  padding: 10px 100px;
  margin: 190px 10px; /* Espaçamento interno e externo */
  position: absolute;
  align-items: left;
  width: 80%;
`;

export const MedicamenConteiner = styled.View`
  border-radius: 10px;
  padding: 10px 100px;
  margin: 315px 10px; /* Espaçamento interno e externo */
  justify-content: center;
  position: absolute;
  align-items: absolute;
`;

export const MedicamConteiner = styled.View`
  background-color: #dbf0f7; /* Azul claro */
  border-radius: 10px;
  padding: 10px 100px;
  margin: 365px 20px; /* Espaçamento interno e externo */
  position: absolute;
  width: 90%;
  justify-content: left;
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
  font-size: 150px;
  font-weight: bold;
  color: black;
  top: 10px;
  alignItems: center;
  justifyContent: center;
  textAlign: center;
  width:100%;
  left: 0px;
  `;

export const BemText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-top: 5px; /* Espaçamento entre as informações */
  alignItems: right;
  justifyContent: center;
  textAlign: right;
  right: 10px;
  width:100%;
`;

export const RegularText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  top: -23px; /* Espaçamento entre as informações */
  alignItems: center;
  justifyContent: center;
  textAlign: center;
  width:100%;
`;

export const MalText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  top: -45px; /* Espaçamento entre as informações */
  alignItems: left;
  justifyContent: left;
  textAlign: left;
  left: 10px;
  width:100%;
`;

export const MedicTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-top: 5px; /* Espaçamento entre as informações */
  margin: 5px -85px;
`;

export const AlertContainer = styled.View`
  background-color: #dbf0f7; /*cAzul claro */
  border-radius: 10px;
  padding: 10px 100px;
  margin: 240px 20px; /* Espaçamento interno e externo */
  justify-content: left;
  position: absolute;
  width: 90%

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
`;

export const MedicText = styled.Text`
  font-size: 16px;
  color: #000000;
  margin-top: 0px; /* Espaçamento entre as informações */
  margin: 0px -80px;
`;

export const TipoPerfil = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 9px; /* Espaço abaixo do nome */
  position: absolute;
  top: 60px;
  right: 254px;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: #000000;
  margin-top: -10px; /* Espaçamento entre as informações */
  margin: 0px 0px;
`;

export const Saudacao  = styled.Text`
  font-size: 40px;
  color: #000000;
  margin-top: 0px; /* Espaçamento entre as informações */
  margin: 10px 20px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const HumorText = styled.Text`
  font-size: 40px;
  color: #000000;
  margin-top: 0px; /* Espaçamento entre as informações */
  margin: 10px 20px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  position: absolute;
  top: 10px;
  alignItems: center;
  justifyContent: center;
  textAlign: left;
  width:100%;
`;

export const HojeEstouText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color:rgb(0, 0, 0);
  margin-bottom: 9px; /* Espaço abaixo do nome */
  top: 60px;
  left: 22px;
  position: absolute;
  textAlign: left;
  width: 90%;
`;

export const AlertIconContainer = styled.View`
  position: absolute;
  top: 10px;
  right: 10px; /* Posiciona o ícone no canto superior direito */
`;

export const DateContainer = styled.View`
  background-color: #dbf0f7; /*cAzul claro */
  border-radius: 10px;
  padding: 70px 0px;
  margin: 140px 20px; /* Espaçamento interno e externo */
  justify-content: left;
  position: absolute;
  width: 90%
`;

export const DateText = styled.Text`
  color:rgb(0, 0, 0);
  font-size: 18px;
  font-weight: 300;
  font-family: 'sans-serif-light'; 
  margin: 25px 20px;
  justify-content: center;
  align-items: center;
  top: -40px;
  right: -1px;
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
  width: 100%;
  justifyContent: center;
  alignItems: center;
`;

export const EmojiSelectionContainer = styled.View`
  height: 100px; /* Altura fixa para ajustar apenas a barra de emojis */
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 100px;
  width: 100%;
  border-radius: 10px; /* Bordas arredondadas */
  left: -100px;
  flex-direction: row:
`;
