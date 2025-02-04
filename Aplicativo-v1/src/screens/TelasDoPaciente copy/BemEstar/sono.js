import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Header from '../../../components/ComponentsPaciente/Header';
import SonoSelection from '../../../components/ComponentsPaciente/SonoSelection'; // 📌 Componente para selecionar qualidade do sono

export default function SonoScreen() {
    const navigation = useNavigation();

    return (
        <Container>
            {/* Cabeçalho */}
            <Header />

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Seção de Sono */}
                <SectionTitle>Qualidade do Sono</SectionTitle>
                <SonoContainer>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>
                        Como foi seu sono?
                    </Text>

                    <SonoSelection onSleepQualitySelect={(quality) => console.log('Sono selecionado:', quality)} />
                </SonoContainer>

                {/* Botão de Voltar */}
                <BackButton onPress={() => navigation.goBack()}>
                    <BackButtonText>Voltar</BackButtonText>
                </BackButton>
            </ScrollView>
        </Container>
    );
}

// 📌 Estilos
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

const SonoContainer = styled.View`
  background-color: #b0d4e3;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 20px;
  align-items: center;
`;

const BackButton = styled(TouchableOpacity)`
  background-color: #b0d4e3;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  margin-top: 20px;
  align-self: center;
  width: 150px;
`;

const BackButtonText = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;
