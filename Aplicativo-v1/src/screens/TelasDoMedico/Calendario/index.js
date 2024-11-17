import React, { useState, useEffect } from 'react';
import {
    Container,
    TopSectionContainer,
    AlertTitle,
    AddButton,
    AddButtonText,
} from './styles';
import Header from '../../../components/ComponentsMedico/Header';
import GreetingSection from '../../../components/ComponentsMedico/SaudacaoSection';
import AppointmentList from './AppointmentList';
import AddAppointmentModal from './AddAppointmentModal';

export default () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [appointments, setAppointments] = useState([
        {
            date: '17/11',
            time: '08:30',
            type: 'Consulta Clínica',
            patient: 'Maria Clara Silva',
        },
        {
            date: '17/11',
            time: '10:00',
            type: 'Procedimento',
            patient: 'João Carlos Andrade',
        },
        {
            date: '17/11',
            time: '14:00',
            type: 'Consulta Clínica',
            patient: 'Ana Beatriz Mendes',
        },
        {
            date: '17/11',
            time: '16:00',
            type: 'Consulta Clínica',
            patient: 'Roberto Ferreira Lima',
        },
        {
            date: '18/11',
            time: '09:00',
            type: 'Consulta Clínica',
            patient: 'Carlos Henrique Souza',
        },
        {
            date: '18/11',
            time: '11:30',
            type: 'Procedimento',
            patient: 'Fernanda Costa Lima',
        },
    ]);
    const [modalVisible, setModalVisible] = useState(false);

    // Função para obter a data de hoje no formato dd/MM
    const getTodayDate = () => {
        const today = new Date();
        return `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}`;
    };

    // Configurar o dia atual como selecionado por padrão
    useEffect(() => {
        const todayDate = getTodayDate();
        setSelectedDay({ day: 'Hoje', date: todayDate });
    }, []);

    // Filtrar as consultas da data selecionada
    const filteredAppointments = selectedDay
        ? appointments
              .filter((appt) => appt.date === selectedDay.date)
              .sort((a, b) => a.time.localeCompare(b.time)) // Organiza por horário
        : [];

    // Função para adicionar uma nova consulta
    const addNewAppointment = (appointment) => {
        setAppointments([...appointments, appointment]);
        setModalVisible(false);
    };

    return (
        <Container>
            {/* Cabeçalho e saudação */}
            <TopSectionContainer>
                <Header />
                <GreetingSection onDayPress={setSelectedDay} />
            </TopSectionContainer>

            {/* Título da seção de agendamentos */}
            <AlertTitle>
                {selectedDay
                    ? `Agendamentos para ${selectedDay.date}`
                    : 'Selecione um dia'}
            </AlertTitle>

            {/* Lista de consultas */}
            <AppointmentList appointments={filteredAppointments} />

            {/* Botão de adicionar consulta */}
            <AddButton onPress={() => setModalVisible(true)}>
                <AddButtonText>+</AddButtonText>
            </AddButton>

            {/* Modal para adicionar consulta */}
            <AddAppointmentModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSave={addNewAppointment}
                selectedDate={selectedDay ? selectedDay.date : ''}
            />
        </Container>
    );
};
