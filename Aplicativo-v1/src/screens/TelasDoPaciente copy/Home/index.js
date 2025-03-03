import React, { useState } from 'react';
import { ScrollView, Modal, TextInput, TouchableOpacity, Text, View } from 'react-native';
import { Plus } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();
  const [selectedDay, setSelectedDay] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [consultas, setConsultas] = useState(consultasMock);
  const [medicamentos, setMedicamentos] = useState(medicamentosMock);
  const [selectedConsulta, setSelectedConsulta] = useState(null);

  // Estado para os campos do formulário
  const [novaConsulta, setNovaConsulta] = useState({
    date: selectedDay?.date || "21/02",
    time: "",
    specialty: "",
    doctor: ""
  });

  // Filtrar dados com base no dia selecionado
  const consultasFiltradas = consultas.filter(consulta => consulta.date === selectedDay?.date);
  const medicamentosFiltrados = medicamentos.filter(med => med.date === selectedDay?.date);

  // Adicionar nova consulta
  const handleSaveConsulta = () => {
    if (!novaConsulta.time || !novaConsulta.specialty || !novaConsulta.doctor) {
      alert("Preencha todos os campos!");
      return;
    }

    setConsultas([...consultas, { id: Math.random().toString(), ...novaConsulta }]);
    setShowForm(false);
  };

  // Excluir consulta
  const handleDeleteConsulta = () => {
    if (selectedConsulta) {
      setConsultas(consultas.filter(c => c.id !== selectedConsulta.id));
      setSelectedConsulta(null);
    }
  };

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
            <TouchableOpacity key={consulta.id} onPress={() => setSelectedConsulta(consulta)}>
              <CardItem title={`${consulta.time} - ${consulta.specialty}`} description={`Médico: ${consulta.doctor}`} />
            </TouchableOpacity>
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
      <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.bottomModal}>
            <OptionButton onPress={() => {
              setShowModal(false);
              setShowForm(true);
            }}>
              <OptionText>Adicionar Consulta</OptionText>
            </OptionButton>
            <OptionButton onPress={() => {
              setShowModal(false);
              navigation.navigate('Tratamento');  // 🔹 Navega para a tela de Tratamento
            }}>
              <OptionText>Adicionar Medicamento</OptionText>
            </OptionButton>
            <OptionButton onPress={() => setShowModal(false)}>
              <OptionText>Cancelar</OptionText>
            </OptionButton>
          </View>
        </View>
      </Modal>

      {/* Modal de Formulário */}
      <Modal visible={showForm} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.formContainer}>
            <Text style={styles.modalTitle}>Nova Consulta</Text>

            <TextInput
              placeholder="Data (ex: 20/02)"
              value={novaConsulta.date}
              onChangeText={(text) => setNovaConsulta({ ...novaConsulta, date: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Horário (ex: 14:00)"
              value={novaConsulta.time}
              onChangeText={(text) => setNovaConsulta({ ...novaConsulta, time: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Especialidade"
              value={novaConsulta.specialty}
              onChangeText={(text) => setNovaConsulta({ ...novaConsulta, specialty: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Nome do Médico"
              value={novaConsulta.doctor}
              onChangeText={(text) => setNovaConsulta({ ...novaConsulta, doctor: text })}
              style={styles.input}
            />

            <OptionButton onPress={handleSaveConsulta}>
              <OptionText>Salvar Consulta</OptionText>
            </OptionButton>
            <OptionButton onPress={() => setShowForm(false)}>
              <OptionText>Cancelar</OptionText>
            </OptionButton>
          </View>
        </View>
      </Modal>

      {/* Modal de Exclusão de Consulta */}
      <Modal visible={!!selectedConsulta} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.formContainer}>
            <Text style={styles.modalTitle}>Excluir Consulta?</Text>
            <Text style={{ fontSize: 18, textAlign: 'center' }}>
              {selectedConsulta?.time} - {selectedConsulta?.specialty} {"\n"}
              Médico: {selectedConsulta?.doctor}
            </Text>

            <OptionButton onPress={handleDeleteConsulta}>
              <OptionText>Excluir</OptionText>
            </OptionButton>
            <OptionButton onPress={() => setSelectedConsulta(null)}>
              <OptionText>Cancelar</OptionText>
            </OptionButton>
          </View>
        </View>
      </Modal>
    </Container>
  );
};

// 🔹 Estilos do modal
const styles = {
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  bottomModal: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center'
  },
  formContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
};
