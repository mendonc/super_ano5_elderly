import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles';
import Header from '../../components/Header';
import GreetingSection from '../../components/SaudacaoSection';
import styled from 'styled-components/native';

const TopSectionContainer = styled.View`
  background-color: #b0d4e3; /* Azul claro */
  padding-bottom: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const AlertTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 15px 0 10px; /* Espaçamento acima e abaixo do título */
  padding-left: 20px; /* Alinhamento à esquerda */
`;


export default () => {
    return (
        <Container>
           <TopSectionContainer>
                <Header />
                <GreetingSection />
            </TopSectionContainer>
            <AlertTitle>Alertas</AlertTitle>
            <Text style={{ paddingLeft: 20 }}>Exemplos de Alerta</Text>
        </Container>
    );
}