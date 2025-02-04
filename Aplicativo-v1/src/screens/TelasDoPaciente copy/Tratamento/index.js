import React, { useState } from 'react'; 
import { Modal, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView } from 'react-native';
import { Container, SectionTitle, AddButton, AddButtonText, ListContainer, ModalContainer, ModalContent, ModalButton, ModalButtonText, Input } from './styles';
import Header from '../../../components/ComponentsPaciente/Header';
import MedicamentoList from './MedicamentoList';
import { initialMedicamentos } from './MedicamentoData';

export default () => {
    const [medicamentos, setMedicamentos] = useState(initialMedicamentos);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentMedicamento, setCurrentMedicamento] = useState({
        id: '',
        name: '',
        description: '',
        dosage: '',
        frequency: '',
        indication: ''
    });

    const handleAddMedicamento = () => {
        const newMedicamento = {
            id: (medicamentos.length + 1).toString(),
            name: currentMedicamento.name || 'Novo Medicamento',
            description: currentMedicamento.description || 'Descrição...',
            dosage: currentMedicamento.dosage || '50mg',
            frequency: currentMedicamento.frequency || '1x/dia',
            indication: currentMedicamento.indication || 'Indicação padrão',
        };

        setMedicamentos([...medicamentos, newMedicamento]);
        closeModal();
    };

    const handleEditMedicamento = (medicamento) => {
        setIsEditMode(true);
        setCurrentMedicamento(medicamento);
        setIsModalVisible(true);
    };

    const handleSaveMedicamento = () => {
        setMedicamentos((prev) =>
            prev.map((med) => (med.id === currentMedicamento.id ? currentMedicamento : med))
        );
        closeModal();
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setIsEditMode(false);
        setCurrentMedicamento({ id: '', name: '', description: '', dosage: '', frequency: '', indication: '' });
    };

    return (
        <Container>
            <Header />
            <SectionTitle>Medicamentos atuais</SectionTitle>

            {/* Botão de adicionar medicamento */}
            <AddButton onPress={() => setIsModalVisible(true)}>
                <AddButtonText>+ Adicionar Medicamento</AddButtonText>
            </AddButton>

            {/* Lista de Medicamentos em formato vertical */}
            <SafeAreaView style={{ flex: 1, paddingBottom: 1}}>
                <MedicamentoList medicamentos={medicamentos} onEdit={handleEditMedicamento} />
            </SafeAreaView>

            {/* Modal para Adicionar/Editar Medicamento */}
            <Modal animationType="slide" transparent visible={isModalVisible}>
                <ModalContainer>
                    <ModalContent>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            {isEditMode ? 'Editar Medicamento' : 'Adicionar Medicamento'}
                        </Text>

                        <Input placeholder="Nome" value={currentMedicamento.name} onChangeText={(text) => setCurrentMedicamento({ ...currentMedicamento, name: text })} />
                        <Input placeholder="Descrição" value={currentMedicamento.description} onChangeText={(text) => setCurrentMedicamento({ ...currentMedicamento, description: text })} />
                        <Input placeholder="Dosagem" value={currentMedicamento.dosage} onChangeText={(text) => setCurrentMedicamento({ ...currentMedicamento, dosage: text })} />
                        <Input placeholder="Frequência" value={currentMedicamento.frequency} onChangeText={(text) => setCurrentMedicamento({ ...currentMedicamento, frequency: text })} />
                        <Input placeholder="Indicação" value={currentMedicamento.indication} onChangeText={(text) => setCurrentMedicamento({ ...currentMedicamento, indication: text })} />

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
