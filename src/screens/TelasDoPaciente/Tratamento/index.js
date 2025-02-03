import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
import { Container, SectionTitleContainer, SectionTitle, IconContainer, NameText, ListMedicConteiner } from './styles';
import Header from '../../../components/ComponentsPaciente/Header';
import Pesquisa from '../../../assets/Pesquisa.svg';
import MedicamentoList from './MedicamentoList';
import { initialMedicamentos } from './MedicamentoData';

export default () => {
    const [medicamentos, setMedicamentos] = useState(initialMedicamentos);
    const [filteredMedicamentos, setFilteredMedicamentos] = useState(initialMedicamentos);
    const [searchText, setSearchText] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);  // Controle do modal
    const [isEditMode, setIsEditMode] = useState(false); // Controle para edição
    const [currentMedicamento, setCurrentMedicamento] = useState({
        id: '',
        name: '',
        description: '',
        dosage: '',
        frequency: '',
        indication: ''
    });

    const handleSearch = (text) => {
        setSearchText(text);
        const filtered = medicamentos.filter((medicamento) =>
            medicamento.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredMedicamentos(filtered);
    };

    const handleAddMedicamento = () => {
        const newMedicamentoData = {
            id: (medicamentos.length + 1).toString(),
            name: currentMedicamento.name || 'Novo Medicamento',
            description: currentMedicamento.description || 'Descrição do novo medicamento',
            dosage: currentMedicamento.dosage || '50mg',
            frequency: currentMedicamento.frequency || '1x/dia',
            indication: currentMedicamento.indication || 'Indicação exemplo',
        };

        setMedicamentos((prevMedicamentos) => [...prevMedicamentos, newMedicamentoData]);
        setFilteredMedicamentos((prevFiltered) => [...prevFiltered, newMedicamentoData]);

        setIsModalVisible(false);
        setCurrentMedicamento({
            id: '',
            name: '',
            description: '',
            dosage: '',
            frequency: '',
            indication: ''
        });
    };

    const handleEditMedicamento = (medicamento) => {
        setIsEditMode(true);  // Ativa o modo de edição
        setCurrentMedicamento(medicamento);  // Carrega os dados do medicamento selecionado
        setIsModalVisible(true);  // Abre o modal
    };

    const handleSaveMedicamento = () => {
        setMedicamentos((prevMedicamentos) =>
            prevMedicamentos.map((medicamento) =>
                medicamento.id === currentMedicamento.id ? currentMedicamento : medicamento
            )
        );
        setFilteredMedicamentos((prevFiltered) =>
            prevFiltered.map((medicamento) =>
                medicamento.id === currentMedicamento.id ? currentMedicamento : medicamento
            )
        );

        setIsModalVisible(false);
        setIsEditMode(false);
        setCurrentMedicamento({
            id: '',
            name: '',
            description: '',
            dosage: '',
            frequency: '',
            indication: ''
        });
    };

    return (
        <Container>
            <Header />
            <NameText>Tratamento</NameText>
            <SectionTitleContainer>
                <SectionTitle>Medicamentos</SectionTitle>
                <IconContainer>
                    <Pesquisa
                        width={24}
                        height={24}
                        fill="#000000"
                        onPress={() => setIsSearching(!isSearching)}
                    />
                </IconContainer>
            </SectionTitleContainer>

            {isSearching && (
                <TextInput
                    style={{
                        margin: 10,
                        backgroundColor: 'white',
                        width: 350,
                        top: -33,
                        fontSize: 25,
                        padding: 11,
                        borderWidth: 13,
                        borderColor: '#ffffff',
                        marginBottom: 1,
                        borderRadius: 50,
                    }}
                    placeholder="Digite o nome do medicamento..."
                    placeholderTextColor="#555"
                    value={searchText}
                    onChangeText={(text) => handleSearch(text)}
                />
            )}

            <ListMedicConteiner>
                <View style={styles.buttonContainer}>
                    <Button title="Adicionar Medicamento" onPress={() => setIsModalVisible(true)} />
                </View>

                <MedicamentoList
                    medicamentos={filteredMedicamentos.length > 0 ? filteredMedicamentos : medicamentos}
                    onEdit={handleEditMedicamento}  // Passando a função de editar
                />
            </ListMedicConteiner>

            {/* Modal para Adicionar/Editar Medicamento */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{isEditMode ? 'Editar Medicamento' : 'Adicionar Medicamento'}</Text>
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            value={currentMedicamento.name}
                            onChangeText={(text) => setCurrentMedicamento({ ...currentMedicamento, name: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Descrição"
                            value={currentMedicamento.description}
                            onChangeText={(text) => setCurrentMedicamento({ ...currentMedicamento, description: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Dosagem"
                            value={currentMedicamento.dosage}
                            onChangeText={(text) => setCurrentMedicamento({ ...currentMedicamento, dosage: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Frequência"
                            value={currentMedicamento.frequency}
                            onChangeText={(text) => setCurrentMedicamento({ ...currentMedicamento, frequency: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Indicação"
                            value={currentMedicamento.indication}
                            onChangeText={(text) => setCurrentMedicamento({ ...currentMedicamento, indication: text })}
                        />

                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={isEditMode ? handleSaveMedicamento : handleAddMedicamento}
                            >
                                <Text style={styles.buttonText}>{isEditMode ? 'Salvar Alterações' : 'Adicionar'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    setIsModalVisible(false);
                                    setIsEditMode(false);
                                    setCurrentMedicamento({
                                        id: '',
                                        name: '',
                                        description: '',
                                        dosage: '',
                                        frequency: '',
                                        indication: ''
                                    });
                                }}
                            >
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </Container>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
        padding: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        width: 300,
        borderRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 8,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#007aff',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

