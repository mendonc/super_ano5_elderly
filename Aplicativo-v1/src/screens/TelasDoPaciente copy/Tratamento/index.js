import React, { useState, useEffect } from 'react';  
import { Modal, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { Container, SectionTitle, AddButton, AddButtonText, ModalContainer, ModalContent, ModalButton, ModalButtonText, Input } from './styles';
import Header from '../../../components/ComponentsPaciente/Header';
import MedicamentoList from './MedicamentoList';
import { getMedicamentos, addMedicamento, updateMedicamento, deleteMedicamento } from '../../../data/medicamentoService';

export default () => {
    const [medicamentos, setMedicamentos] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentMedicamento, setCurrentMedicamento] = useState({
        id: '',
        name: '',
        dosage: '',
        frequency: '',
    });

    const userId = "99977755533";

    // 🔹 Carregar medicamentos ao iniciar a tela
    useEffect(() => {
        carregarMedicamentos();
    }, []);

    const carregarMedicamentos = async () => {
        const data = await getMedicamentos(userId);
        setMedicamentos(data);
    };

    const handleEditMedicamento = (medicamento) => {
        setIsEditMode(true);
        setCurrentMedicamento(medicamento);
        setIsModalVisible(true);
    };

    // 🔹 Adicionar novo medicamento e atualizar a lista
    const handleAddMedicamento = async () => {
        const newMedicamento = {
            ...currentMedicamento,
            user_id: userId,
        };

        const response = await addMedicamento(newMedicamento);
        if (response) {
            await carregarMedicamentos(); // 🔄 Atualiza a lista
            closeModal();
        }
    };

    // 🔹 Atualizar medicamento
    const handleSaveMedicamento = async () => {
        const response = await updateMedicamento(currentMedicamento.id, currentMedicamento);
        if (response) {
            await carregarMedicamentos(); // 🔄 Atualiza a lista
            closeModal();
        }
    };

    // 🔹 Deletar medicamento
    const handleDeleteMedicamento = async (id) => {
        const success = await deleteMedicamento(id);
        if (success) {
            await carregarMedicamentos(); // 🔄 Atualiza a lista
        }
    };

    // 🔹 Fechar modal
    const closeModal = () => {
        setIsModalVisible(false);
        setIsEditMode(false);
        setCurrentMedicamento({ id: '', name: '', dosage: '', frequency: '' });
    };

    return (
        <Container>
            <Header />
            <SectionTitle>Medicamentos atuais</SectionTitle>

            <AddButton onPress={() => setIsModalVisible(true)}>
                <AddButtonText>+ Adicionar Medicamento</AddButtonText>
            </AddButton>

            <SafeAreaView style={{ flex: 1, paddingBottom: 1 }}>
                <MedicamentoList 
                    medicamentos={medicamentos} 
                    onEdit={handleEditMedicamento} 
                    onDelete={handleDeleteMedicamento} 
                />
            </SafeAreaView>

            <Modal animationType="slide" transparent visible={isModalVisible}>
                <ModalContainer>
                    <ModalContent>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            {isEditMode ? 'Editar Medicamento' : 'Adicionar Medicamento'}
                        </Text>

                        <Input placeholder="Nome" value={currentMedicamento.name} onChangeText={(text) => setCurrentMedicamento({ ...currentMedicamento, name: text })} />
                        <Input placeholder="Dosagem" value={currentMedicamento.dosage} onChangeText={(text) => setCurrentMedicamento({ ...currentMedicamento, dosage: text })} />
                        <Input placeholder="Frequência" value={currentMedicamento.frequency} onChangeText={(text) => setCurrentMedicamento({ ...currentMedicamento, frequency: text })} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <ModalButton onPress={isEditMode ? handleSaveMedicamento : handleAddMedicamento}>
                                <ModalButtonText>{isEditMode ? 'Salvar' : 'Adicionar'}</ModalButtonText>
                            </ModalButton>
                            <ModalButton onPress={closeModal} style={{ backgroundColor: '#FF3B30' }}>
                                <ModalButtonText>Cancelar</ModalButtonText>
                            </ModalButton>
                        </View>
                    </ModalContent>
                </ModalContainer>
            </Modal>
        </Container>
    );
};
