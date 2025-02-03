import React from 'react';
import styled from 'styled-components/native';

// Importe o SVG do Guardião
import GuardiaoIcon from '../../assets/GuardiaoFoto.svg';

const HeaderContainer = styled.View`
  background-color: #25306b; /* Verde escuro */
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const IconContainer = styled.View``;

const DateContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const DateText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  font-family: 'sans-serif-light'; 
`;

export default function Header() {
  // Obter a data de hoje formatada
  const getFormattedDate = () => {
    const today = new Date();
    const day = today.getDate();
    const monthNames = [
      'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
      'jul', 'ago', 'set', 'out', 'nov', 'dez',
    ];
    const month = monthNames[today.getMonth()];
    return `Hoje, ${day} de ${month}`;
  };

  return (
    <HeaderContainer>
      {/* Ícone do guardião */}
      <IconContainer>
        <GuardiaoIcon width={60} height={60} />
      </IconContainer>

      {/* Data centralizada */}
      <DateContainer>
        <DateText>{getFormattedDate()}</DateText>
      </DateContainer>
    </HeaderContainer>
  );
}
