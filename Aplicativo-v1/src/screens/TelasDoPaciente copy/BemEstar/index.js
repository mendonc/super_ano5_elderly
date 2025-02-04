import React, { useState } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import {
  Container, PrincipalTopic, TipoPerfil, DateContainer, DateText, 
  TopSectionContainer, HeaderContainer, secondconteiner, Consultconteiner,
  AlertTitle, Saudacao, MedicamConteiner, MedicTitle, MedicText, MediTitle,
  AlertContainer, MedicamenConteiner, BemText, MalText, RegularText,
  NameText, HumorText, HojeEstouText, IconContainer,
  InfoText, EmojiSelectionContainer,
  AlertIconContainer, 
  Exametitle
} from './styles';
import Header from '../../../components/ComponentsPaciente/Header';
import Emojisorriso from '../../../assets/Emojisorriso.svg';


const emotions = ['😡', '😟', '😐', '🙂', '😄']; // Emojis de emoções

export default () => {
  const [selectedEmotion, setSelectedEmotion] = useState(3); // Emoção inicial

  const handlePress = (index) => {
    setSelectedEmotion(index); // Atualiza o emoji selecionado
  };

  return (
    <Container>
      {/* Cabeçalho */}
      <Header/>
      <NameText>Bem-estar</NameText>

      <DateContainer>
        <HumorText>Humor</HumorText>
        <HojeEstouText>Hoje estou me sentindo...</HojeEstouText>

        <IconContainer>
          <Exametitle numberOfLines={1} ellipsizeMode='tail'>{emotions[selectedEmotion]}</Exametitle>
        </IconContainer>
        {/* Barra de Emoções */}
        <FlatList
          horizontal
          data={emotions}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            marginVertical:20,
            
          }}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handlePress(index)} style={{ marginHorizontal: 9 }}>
              <Text style={{
                fontSize: selectedEmotion === index ? 60 : 50,
                opacity: selectedEmotion === index ? 1 : 0.5,
                transform: selectedEmotion === index ? [{ scale: 1.2 }] : [{ scale: 1 }],
              }}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />

        {/* Exibição do Emoji Selecionado */}
        

        {/* Categorias de Emoções */}
        <BemText>
          <Text>Muito Bem</Text>
        </BemText>

        <RegularText>
          <Text>Regular</Text>
        </RegularText>

        <MalText>
          <Text>Muito Mal</Text>
        </MalText>

          
        <TouchableOpacity 
   onPress={() => setSelectedTab('sono')}
   style={{
    backgroundColor:  '#b0d4e3',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  }}
>
  <Text style={{ color: '#000000', fontSize: 20 }}>Próximo > </Text>
</TouchableOpacity>

      </DateContainer>
    </Container>
  );
};
