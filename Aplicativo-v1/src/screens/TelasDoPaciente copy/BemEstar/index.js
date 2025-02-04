import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import Header from '../../../components/ComponentsPaciente/Header';
import HumorSelection from '../../../components/ComponentsPaciente/HumorSelection';

// 📌 Estilização
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000; /* Preto para melhor leitura */
  margin: 20px 20px 10px 20px;
`;

const HumorContainer = styled.View`
  background-color: #b0d4e3;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 20px;
  align-items: center;
`;

const NextButton = styled(TouchableOpacity)`
  background-color: #b0d4e3;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  margin-top: 20px;
`;

const NextButtonText = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

export default () => {
  return (
    <Container>
      {/* Cabeçalho */}
      <Header />

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Seção de Humor */}
        <SectionTitle>Bem-estar</SectionTitle>
        <HumorContainer>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>
            Hoje estou me sentindo...
          </Text>

          <HumorSelection onEmotionSelect={(emotion) => console.log('Humor selecionado:', emotion)} />

          {/* Botão de Próximo */}
          
        </HumorContainer>
        <NextButton 
          onPress={() => console.log('Ir para próxima tela')}
          style={{ alignSelf: 'center', width: 150 }}  // 🔹 Adicionando estilos inline
        >
            <NextButtonText>Próximo {'>'}</NextButtonText>
          </NextButton>
      </ScrollView>
    </Container>
  );
};
