import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import EmojiMuitoRuim from '../../assets/EmojiMuitoRuim.svg';
import EmojiRuim from '../../assets/EmojiRuim.svg';
import EmojiNeutro from '../../assets/EmojiNeutro.svg';
import EmojiBom from '../../assets/EmojiBom.svg';
import EmojiMuitoBom from '../../assets/EmojiMuitoBom.svg';

const emotions = [
  { icon: <EmojiMuitoRuim width={40} height={40} />, label: 'Muito Mal', severity: 1 },
  { icon: <EmojiRuim width={40} height={40} />, label: 'Ruim', severity: 2 },
  { icon: <EmojiNeutro width={40} height={40} />, label: 'Neutro', severity: 3 },
  { icon: <EmojiBom width={40} height={40} />, label: 'Bem', severity: 4 },
  { icon: <EmojiMuitoBom width={40} height={40} />, label: 'Muito Bem', severity: 5 },
];

const HumorSelection = ({ onEmotionSelect, humorSalvo }) => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  useEffect(() => {
    if (humorSalvo) {
      const selectedIndex = emotions.findIndex(e => e.label.toLowerCase() === humorSalvo.label.toLowerCase());
      setSelectedEmotion(selectedIndex !== -1 ? selectedIndex : null);
    } else {
      setSelectedEmotion(null);
    }
  }, [humorSalvo]);

  const handlePress = (index) => {
    const selected = emotions[index];
    setSelectedEmotion(index);
    if (onEmotionSelect) {
      onEmotionSelect(selected);
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
