import React from 'react';
import { Text } from 'react-native';
import {
    Container,
    AlertTitle,
    AlertContainer,
    NameText,
    InfoText,
    AlertIconContainer,
  } from './styles';
  import Header from '../../../components/ComponentsGuardiao/Header';
import AlertaIcon from '../../../assets/Alerta.svg';

export default () => {
  return (
    <Container>
      {/* Cabeçalho */}
      <Header />

      {/* Título da seção */}
      <AlertTitle>Bem-estar</AlertTitle>

      {/* Exemplo de paciente */}
      <AlertContainer>
        <AlertIconContainer>
          <AlertaIcon width={30} height={30} fill="#ff0000" />
        </AlertIconContainer>
        <NameText>Joãozinho</NameText>
        <InfoText>
          <Text style={{ fontWeight: 'bold' }}>Pressão arterial: </Text>17/6 (Alto)
        </InfoText>
        <InfoText>
          <Text style={{ fontWeight: 'bold' }}>Batimento: </Text>120 bpm (Anormal)
        </InfoText>
        <InfoText>
          <Text style={{ fontWeight: 'bold' }}>Estou me sentindo: </Text>Muito mal
        </InfoText>
        <InfoText>
          <Text style={{ fontWeight: 'bold' }}>Próximo remédio: </Text>Losartana 20mg às 18h
        </InfoText>
        <InfoText>
          <Text style={{ fontWeight: 'bold' }}>Sintomas: </Text>Sudorese, fraqueza, tontura, confusão mental
        </InfoText>
      </AlertContainer>
    </Container>
  );
};
