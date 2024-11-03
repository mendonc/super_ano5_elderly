import React from 'react';
import styled from 'styled-components/native';

// Importe o SVG do médico
import MedicoIcon from '../assets/Medico.svg';

const HeaderContainer = styled.View`
  background-color: #25306b; /* Azul escuro */
  padding: 20px;
  flex-direction: row;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const IconContainer = styled.View`
  margin-right: 15px; /* Espaço entre o ícone e o texto */
`;

const InfoContainer = styled.View`
  flex-direction: column;
`;

const NameText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

const SpecialtyText = styled.Text`
  color: #d9d9d9;
  font-size: 14px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <IconContainer>
        <MedicoIcon width={60} height={60} />
      </IconContainer>
      
      <InfoContainer>
        <NameText>Dr. José Samabaio</NameText>
        <SpecialtyText>Cardiologista</SpecialtyText>
      </InfoContainer>
    </HeaderContainer>
  );
}
