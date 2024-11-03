import React from 'react';
import styled from 'styled-components/native';

// Obtenha a saudação com base na hora
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Bom Dia';
  if (hour < 18) return 'Boa Tarde';
  return 'Boa Noite';
};

// Obtenha o dia atual da semana
const getCurrentDay = () => {
  const days = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];
  const today = new Date().getDay();
  return days[(today + 6) % 7]; // Ajusta para começar em "seg"
};

const GreetingContainer = styled.View`
  background-color: #b0d4e3; /* Azul claro */
  padding: 15px 20px 10px 20px;
  align-items: center;
`;

const GreetingText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #25306b;
`;

const DaysContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

const DayBox = styled.View`
  background-color: ${({ isToday }) => (isToday ? '#25306b' : '#d3d3d3')};
  padding: 15px 9px;
  border-radius: 18px;
  margin: 0 5px;
`;

const DayText = styled.Text`
  color: ${({ isToday }) => (isToday ? '#fff' : '#333')};
  font-size: 14px;
`;

export default function GreetingSection() {
  const greeting = getGreeting();
  const currentDay = getCurrentDay();
  const days = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

  return (
    <GreetingContainer>
      <GreetingText>{greeting}, Dr. José!</GreetingText>
      <DaysContainer>
        {days.map((day) => (
          <DayBox key={day} isToday={day === currentDay}>
            <DayText isToday={day === currentDay}>{day}</DayText>
          </DayBox>
        ))}
      </DaysContainer>
    </GreetingContainer>
  );
}
