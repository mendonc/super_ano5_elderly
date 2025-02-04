import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Plus } from 'react-native-feather';
import Header from '../../../components/ComponentsPaciente/Header';
import SaudacaoSection from '../../../components/ComponentsPaciente/SaudacaoSection';
import CardItem from '../../../components/ComponentsPaciente/CardItem';
import { consultasMock, medicamentosMock } from '../../../data/mockData';
import {
  Container,
  SectionTitle,
  Divider,
  FloatingButton,
  ModalContainer,
  OptionButton,
  OptionText,
  TopSectionContainer
} from './styles';

export default () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Filtrar dados com base no dia selecionado
  const consultasFiltradas = consultasMock.filter(consulta => consulta.date === selectedDay?.date);
  const medicamentosFiltrados = medicamentosMock.filter(med => med.date === selectedDay?.date);

  return (
    <Container>
      {/* Cabeçalho */}
      <TopSectionContainer>
        <Header />
        <SaudacaoSection onDayPress={(day) => setSelectedDay(day)} />
      </TopSectionContainer>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Batimento Cardíaco */}
        <SectionTitle>Seu batimento cardíaco:</SectionTitle>
        <CardItem title="83 bpm" description="(Normal)" />

        {/* Linha Divisória */}
        <Divider />

        {/* Seção de Consultas */}
        <SectionTitle>Consultas/exames</SectionTitle>
        {consultasFiltradas.length > 0 ? (
          consultasFiltradas.map((consulta) => (
            <CardItem key={consulta.id} title={`${consulta.time} - ${consulta.specialty}`} description={`Médico: ${consulta.doctor}`} />
          ))
        ) : (
          <CardItem title="Sem consultas para hoje" description="" />
        )}

        {/* Linha Divisória */}
        <Divider />

        {/* Seção de Medicamentos */}
        <SectionTitle>Medicamentos</SectionTitle>
        {medicamentosFiltrados.length > 0 ? (
          medicamentosFiltrados.map((med) => (
            <CardItem key={med.id} title={`${med.time} - ${med.name}`} description={`${med.dosage}, ${med.frequency}`} />
          ))
        ) : (
          <CardItem title="Sem medicamentos para hoje" description="" />
        )}
      </ScrollView>

      {/* Botão Flutuante */}
      <FloatingButton onPress={() => setShowModal(true)}>
        <Plus color="white" width={34} height={34} />
      </FloatingButton>

      {/* Modal de Opções */}
      {showModal && (
        <ModalContainer>
          <OptionButton onPress={() => console.log("Adicionar Consulta")}>
            <OptionText>Adicionar Consulta</OptionText>
          </OptionButton>
          <OptionButton onPress={() => console.log("Adicionar Medicamento")}>
            <OptionText>Adicionar Medicamento</OptionText>
          </OptionButton>
          <OptionButton onPress={() => setShowModal(false)}>
            <OptionText>Cancelar</OptionText>
          </OptionButton>
        </ModalContainer>
      )}
    </Container>
  );
};
