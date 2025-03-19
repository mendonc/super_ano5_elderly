import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Text, View, Alert } from 'react-native';
import styled from 'styled-components/native';
import Header from '../../../components/ComponentsPaciente/Header';
import HumorSelection from '../../../components/ComponentsPaciente/HumorSelection';
import { getHumor, addHumor, updateHumor, deleteHumor } from '../../../data/bemEstarService';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importe AsyncStorage

import EmojiMuitoRuim from '../../../assets/EmojiMuitoRuim.svg';
import EmojiRuim from '../../../assets/EmojiRuim.svg';
import EmojiNeutro from '../../../assets/EmojiNeutro.svg';
import EmojiBom from '../../../assets/EmojiBom.svg';
import EmojiMuitoBom from '../../../assets/EmojiMuitoBom.svg';

const emotionMap = {
    "Muito Mal": <EmojiMuitoRuim width={60} height={60} />,
    "Ruim": <EmojiRuim width={60} height={60} />,
    "Neutro": <EmojiNeutro width={60} height={60} />,
    "Bem": <EmojiBom width={60} height={60} />,
    "Muito Bem": <EmojiMuitoBom width={60} height={60} />,
};

export default function BemEstarScreen() {
    const [selectedEmotion, setSelectedEmotion] = useState({ severity: 3, label: "Neutro" });
    const [humorSalvo, setHumorSalvo] = useState(null);
    const [userId, setUserId] = useState(null); // Estado para armazenar o userId

    useEffect(() => {
        const fetchUserId = async () => {
            const storedUserId = await AsyncStorage.getItem('userCPF');
            if (storedUserId) {
                setUserId(storedUserId);
                carregarHumor(storedUserId); // Carrega o humor com o userId correto
            }
        };
        fetchUserId();
    }, []);

    const carregarHumor = async (userId) => {
        if (!userId) return; // Verifica se userId está disponível
        const humor = await getHumor(userId);
        if (humor) {
            setHumorSalvo(humor);
            setSelectedEmotion({ severity: humor.severity, label: humor.label });
        }
    };

    const handleSelectEmotion = (emotion) => {
        setSelectedEmotion(emotion);
    };

    const handleSaveHumor = async () => {
        if (!selectedEmotion || !selectedEmotion.label) {
            Alert.alert("Erro", "Por favor, selecione um humor antes de continuar.");
            return;
        }

        if (humorSalvo && humorSalvo.id) {
            console.log("🔄 Atualizando humor existente com ID:", humorSalvo.id);
            const atualizado = await updateHumor(humorSalvo.id, selectedEmotion.label);

            if (atualizado) {
                console.log("✅ Humor atualizado com sucesso!");
                await carregarHumor(userId); // Passa userId para carregarHumor
            } else {
                Alert.alert("Erro", "Não foi possível atualizar o humor.");
            }
        } else {
            console.log("📤 Tentando salvar humor...");
            const salvo = await addHumor(userId, selectedEmotion.label); // Usa userId do estado

            if (salvo) {
                console.log("✅ Novo humor salvo com sucesso!");
                await carregarHumor(userId); // Passa userId para carregarHumor
            } else {
                Alert.alert("Erro", "Não foi possível salvar o novo humor.");
            }
        }
    };

    const handleDeleteHumor = async () => {
        if (!humorSalvo || !humorSalvo.id) {
            console.error("❌ Erro: ID do humor não encontrado para deletar.");
            return;
        }

        Alert.alert(
            "Excluir humor",
            "Tem certeza que deseja excluir seu humor do dia?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Sim",
                    onPress: async () => {
                        const sucesso = await deleteHumor(humorSalvo.id);
                        if (sucesso) {
                            setHumorSalvo(null);
                            setSelectedEmotion({ severity: 3, label: "Neutro" });
                        }
                    },
                },
            ]
        );
    };

    return (
        <Container>
            <Header />
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <SectionTitle>Bem-estar</SectionTitle>
                <HumorContainer>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>
                        Hoje estou me sentindo...
                    </Text>

                    {humorSalvo ? (
                        <>
                            <View style={{ alignItems: 'center', marginTop: 10 }}>
                                {emotionMap[humorSalvo.label.trim().split(" ")
                                    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                                    .join(" ")] || null}
                                <SelectedHumorText>{humorSalvo.label.trim()}</SelectedHumorText>
                            </View>

                            <ActionButtonsContainer>
                                <ActionButton onPress={() => setHumorSalvo(null)}>
                                    <ActionButtonText>Editar</ActionButtonText>
                                </ActionButton>
                                <ActionButton delete onPress={handleDeleteHumor}>
                                    <ActionButtonText>Excluir</ActionButtonText>
                                </ActionButton>
                            </ActionButtonsContainer>
                        </>
                    ) : (
                        <>
                            <HumorSelection onEmotionSelect={handleSelectEmotion} humorSalvo={humorSalvo} />
                            <NextButton onPress={handleSaveHumor}>
                                <NextButtonText>Avançar</NextButtonText>
                            </NextButton>
                        </>
                    )}
                </HumorContainer>
            </ScrollView>
        </Container>
    );
}
// 🎨 Estilização

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  margin: 20px 20px 10px 20px;
`;

const HumorContainer = styled.View`
  background-color: #b0d4e3;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 20px;
  align-items: center;
`;

const ActionButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 80%;  /* 🔹 Define uma largura fixa */
  align-self: center; /* 🔹 Centraliza no container */
`;


const ActionButton = styled(TouchableOpacity)`
  background-color: ${(props) => (props.delete ? '#FF3B30' : '#007bff')};
  padding: 10px;
  border-radius: 8px;
  width: 100px;
  align-items: center;
`;

const ActionButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

const SelectedHumorText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-top: 10px;
`;

const NextButton = styled(TouchableOpacity)`
  background-color: #007bff;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  margin-top: 20px;
  width: 150px;
`;

const NextButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
