import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

// 📌 Importação dos SVGs
import EmojiMuitoRuim from '../../assets/EmojiMuitoRuim.svg';
import EmojiRuim from '../../assets/EmojiRuim.svg';
import EmojiNeutro from '../../assets/EmojiNeutro.svg';
import EmojiBom from '../../assets/EmojiBom.svg';
import EmojiMuitoBom from '../../assets/EmojiMuitoBom.svg';

// 📌 Lista de emoções com ícones e rótulos
const emotions = [
  { icon: <EmojiMuitoRuim width={40} height={40} />, label: 'Muito Mal' },
  { icon: <EmojiRuim width={40} height={40} />, label: 'Ruim' },
  { icon: <EmojiNeutro width={40} height={40} />, label: 'Neutro' },
  { icon: <EmojiBom width={40} height={40} />, label: 'Bem' },
  { icon: <EmojiMuitoBom width={40} height={40} />, label: 'Muito Bem' },
];

const HumorSelection = ({ onEmotionSelect }) => {
  const [selectedEmotion, setSelectedEmotion] = useState(2); // Começa com "Neutro"

  const handlePress = (index) => {
    setSelectedEmotion(index);
    if (onEmotionSelect) {
      onEmotionSelect(emotions[index]);
    }
  };

  return (
    <Container>
      {emotions.map((item, index) => (
        <EmotionBox 
          key={index} 
          isSelected={selectedEmotion === index} 
          onPress={() => handlePress(index)}
        >
          {item.icon}
          <EmotionLabel>{item.label}</EmotionLabel>
        </EmotionBox>
      ))}
    </Container>
  );
};

export default HumorSelection;

// 🎨 Estilos
const Container = styled.View`
  margin-top: 20px;
  width: 100%;
  align-items: center;
`;

const EmotionBox = styled(TouchableOpacity)`
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => (props.isSelected ? '#25306b' : '#fff')};
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
`;

const EmotionLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-left: 15px;
`;
