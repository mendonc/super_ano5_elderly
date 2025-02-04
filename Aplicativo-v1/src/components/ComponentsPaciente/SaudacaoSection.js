import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

// Função para obter a saudação com base no horário
const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bom Dia';
    if (hour < 18) return 'Boa Tarde';
    return 'Boa Noite';
};

// Função para obter os próximos 5 dias
const getDaysFromIndex = (startIndex) => {
    const today = new Date();
    const days = [];
    for (let i = startIndex; i < startIndex + 5; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i);
        days.push({
            day: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'][(date.getDay() + 6) % 7],
            date: `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`,
        });
    }
    return days;
};

// Estilização
const GreetingContainer = styled.View`
  background-color: #b0d4e3;
  padding: 15px 20px 10px 20px;
  align-items: center;
  border-radius: 10px;
`;

const GreetingText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000; /* Preto */
`;

const DaysContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const ArrowButton = styled.TouchableOpacity`
  padding: 10px;
`;

const ArrowText = styled.Text`
  font-size: 22px;
  color: #25306b;
  font-weight: bold;
`;

const DayBox = styled.TouchableOpacity`
  background-color: ${({ isSelected }) => (isSelected ? '#25306b' : '#d3d3d3')};
  padding: 10px 9px;
  border-radius: 18px;
  margin: 0 5px;
  align-items: center;
  width: 60px;
`;

const DayText = styled.Text`
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#333')};
  font-size: 14px;
`;

const DateText = styled.Text`
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#333')};
  font-size: 12px;
`;

export default function SaudacaoSection({ onDayPress }) {
    const [startIndex, setStartIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);
    const [greeting, setGreeting] = useState(getGreeting());

    // Atualiza a saudação com base no horário atual
    useEffect(() => {
        const interval = setInterval(() => {
            setGreeting(getGreeting());
        }, 1000 * 60); // Atualiza a cada minuto
        return () => clearInterval(interval);
    }, []);

    // Obter os dias com base no índice inicial
    const days = getDaysFromIndex(startIndex);

    // Configurar o dia atual como selecionado por padrão
    useEffect(() => {
        const today = new Date();
        const todayDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}`;
        setSelectedDate(todayDate);
    }, []);

    const handleDayPress = (day) => {
        setSelectedDate(day.date);
        onDayPress(day); // Passa o dia selecionado para a tela principal
    };

    return (
        <GreetingContainer>
            {/* Saudação dinâmica */}
            <GreetingText>{greeting}, Usuário!</GreetingText>

            {/* Navegação entre os dias */}
            <DaysContainer>
                <ArrowButton
                    onPress={() => setStartIndex((prevIndex) => Math.max(prevIndex - 5, 0))}
                >
                    <ArrowText>{'<'}</ArrowText>
                </ArrowButton>

                {/* Exibição dos 5 dias */}
                {days.map((day, index) => (
                    <DayBox
                        key={index}
                        isSelected={day.date === selectedDate}
                        onPress={() => handleDayPress(day)}
                    >
                        <DayText isSelected={day.date === selectedDate}>{day.day}</DayText>
                        <DateText isSelected={day.date === selectedDate}>{day.date}</DateText>
                    </DayBox>
                ))}

                <ArrowButton
                    onPress={() => setStartIndex((prevIndex) => prevIndex + 5)}
                >
                    <ArrowText>{'>'}</ArrowText>
                </ArrowButton>
            </DaysContainer>
        </GreetingContainer>
    );
}
