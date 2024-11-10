import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, Text } from 'react-native';
import { 
    Container,
    AppointmentType,
    AppointmentTime,
    PatientName,
    ProcedureDescription,
    TopSectionContainer,
    AlertTitle,
    AppointmentContainer,
    AppointmentRow,
    AddButton,
    AddButtonText  
} from './styles';

import Header from '../../../components/ComponentsMedico/Header';
import GreetingSection from '../../../components/ComponentsMedico/SaudacaoSection';

export default () => {
    const [modalVisible, setModalVisible] = useState(false);

    // Função para abrir o modal
    const openModal = () => {
        setModalVisible(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setModalVisible(false);
    };

    // Função para lidar com a seleção de um tipo de agendamento
    const handleScheduleAppointment = (type) => {
        console.log(`Agendando: ${type}`);
        closeModal();
        // Aqui você pode navegar para outra tela ou iniciar o processo de agendamento detalhado
    };

    return (
        <Container>
            <TopSectionContainer>
                <Header />
                <GreetingSection />
            </TopSectionContainer>

            {/* Título da seção de agendamentos */}
            <AlertTitle>Agendamentos</AlertTitle>

            {/* Exemplo de um agendamento de consulta */}
            <AppointmentContainer>
                <AppointmentType>Consulta Clínica</AppointmentType>
                <AppointmentTime>10:00</AppointmentTime>
                <PatientName>Maria Brito Maciel</PatientName>
            </AppointmentContainer>

            {/* Exemplo de um agendamento de procedimento */}
            <AppointmentContainer>
                <AppointmentRow>
                    <AppointmentType>Procedimentos</AppointmentType>
                    <ProcedureDescription>Cateterismo cardíaco</ProcedureDescription>
                </AppointmentRow>
                <AppointmentTime>13:00</AppointmentTime>
                <PatientName>João Suricato</PatientName>
            </AppointmentContainer>

            {/* Botão de adicionar */}
            <AddButton onPress={openModal}>
                <AddButtonText>+</AddButtonText>
            </AddButton>

            {/* Modal para agendar consulta ou procedimento */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={closeModal}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}>
                    <View style={{
                        width: '80%',
                        padding: 20,
                        backgroundColor: '#FFF',
                        borderRadius: 10,
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
                            Escolha o tipo de agendamento
                        </Text>
                        <TouchableOpacity onPress={() => handleScheduleAppointment('Consulta Clínica')} style={{ marginBottom: 15 }}>
                            <Text style={{ fontSize: 16, color: '#25306b' }}>Consulta Clínica</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleScheduleAppointment('Procedimento')} style={{ marginBottom: 15 }}>
                            <Text style={{ fontSize: 16, color: '#25306b' }}>Procedimento</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={closeModal} style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 16, color: '#FF0000' }}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </Container>
    );
}
