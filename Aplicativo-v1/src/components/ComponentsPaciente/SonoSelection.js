import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

// 📌 Importação dos SVGs de qualidade do sono
import EmojiMuitoRuim from '../../assets/EmojiMuitoRuim.svg';
import EmojiRuim from '../../assets/EmojiRuim.svg';
import EmojiNeutro from '../../assets/EmojiNeutro.svg';
import EmojiBom from '../../assets/EmojiBom.svg';
import EmojiMuitoBom from '../../assets/EmojiMuitoBom.svg';

const sleepQualities = [
  { icon: <EmojiMuitoRuim width={60} height={60} />, label: 'Muito Ruim' },
  { icon: <EmojiRuim width={60} height={60} />, label: 'Ruim' },
  { icon: <EmojiNeutro width={60} height={60} />, label: 'Neutro' },
  { icon: <EmojiBom width={60} height={60} />, label: 'Bom' },
  { icon: <EmojiMuitoBom width={60} height={60} />, label: 'Muito Bom' },
];

const SonoSelection = ({ onSleepQualitySelect }) => {
  const [selectedSleep, setSelectedSleep] = useState(2); // Começa com "Neutro"

  const handlePress = (index) => {
    setSelectedSleep(index);
    if (onSleepQualitySelect) {
      onSleepQualitySelect(sleepQualities[index]);
    }
  };

  return (
    <Container>
      {sleepQualities.map((item, index) => (
        <Option key={index} isSelected={selectedSleep === index} onPress={() => handlePress(index)}>
          <EmojiContainer>{item.icon}</EmojiContainer>
          <TextLabel isSelected={selectedSleep === index}>{item.label}</TextLabel>
        </Option>
      ))}
    </Container>
  );
};

export default SonoSelection;

// 🎨 **Estilos**
const Container = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

const Option = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? '#25306b' : '#ffffff')};
  border: 1px solid #b0d4e3;
  padding: 15px;
  border-radius: 10px;
  margin: 5px;
  width: 80%;
  justify-content: flex-start;
`;

const EmojiContainer = styled.View`
  margin-right: 10px;
`;

const TextLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ isSelected }) => (isSelected ? '#000' : '#666')};
`;
