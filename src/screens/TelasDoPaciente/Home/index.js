import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { 
    Container, TipoPerfil, DateContainer, DateText, 
    SecondConteiner, ConsultConteiner,
    AlertTitle, Saudacao, MedicamConteiner, MedicTitle, MedicText, MediTitle,
    AlertContainer, MedicamenConteiner,
    NameText,
    InfoText,
    Exametitle
} from './styles';
import Header from '../../../components/ComponentsPaciente/Header';
import { getFormattedDate } from '../../../Utilitarios/DateUtils';
import AlertaIcon from '../../../assets/Alerta.svg'; // Certifique-se de ajustar o caminho correto do SVG 
import Swiper from 'react-native-swiper';
import { initialConsultas } from './ConsultasData';
import { initialMedicamentos } from '../Tratamento/MedicamentoData';
import { patientData } from '../../../Utilitarios/PacientMock';

export default () => {
  return (

    <Container>
        <Header />
        
        <SecondConteiner>
            <NameText>{patientData.name} {patientData.secondname}</NameText>
            <TipoPerfil>Paciente</TipoPerfil>
        </SecondConteiner>
        
        <DateContainer>
            <Saudacao>Bom dia, {patientData.name}</Saudacao>
            <DateText>{getFormattedDate()}</DateText>
        </DateContainer>
        
        <ConsultConteiner>
            <AlertTitle>Consultas e Exames</AlertTitle>
        </ConsultConteiner>

        {/* Swiper para Consultas */}
        <AlertContainer>
            <Swiper
                loop={false} 
                showsPagination={true} 
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                showsButtons={true}
                style={styles.swiper}
                prevButton={<Text style={styles.arrow}>‹</Text>} // Botão de "voltar"
                nextButton={<Text style={styles.arrow}>›</Text>} // Botão de "próximo"
            >
                {initialConsultas.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <Exametitle>{item.specialty} - {item.time}</Exametitle>
                        <InfoText>
                            <Text>Médico: {item.doctor}</Text>
                            <Text>Data: {item.date}</Text>
                            {item.notes && <Text>Notas: {item.notes}</Text>}
                        </InfoText>
                    </View>
                ))}
            </Swiper>
        </AlertContainer>   

        <MedicamenConteiner>
            <MediTitle>Medicamentos</MediTitle>
        </MedicamenConteiner>

        {/* Swiper para Medicamentos */}
        <MedicamConteiner>
            <Swiper
                loop={false} 
                showsPagination={true} 
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                showsButtons={true}
                style={styles.swiper}
                prevButton={<Text style={styles.arrow}>‹</Text>} // Botão de "voltar"
                nextButton={<Text style={styles.arrow}>›</Text>} // Botão de "próximo"
            >
                {initialMedicamentos.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <MedicTitle>{item.name} - {item.dosage}</MedicTitle>
                        <MedicText>
                            <Text>Frequência: {item.frequency}</Text>
                            <Text>Indicação: {item.indication}</Text>
                            {item.notes && <Text>Notas: {item.notes}</Text>}
                        </MedicText>
                    </View>
                ))}
            </Swiper>
        </MedicamConteiner>
    </Container>

  );
};


const styles = StyleSheet.create({
  swiper: {
    marginTop: 10,
    marginBottom: 100,
    height: 90,
  },
  arrow: {
    fontSize: 50, // Tamanho da seta
    color: '#000', // Cor da seta
    marginTop: 30, // Aumenta a distância entre a seta e o conteúdo
    justifyContent: 'center', 
  },
  card: {
    padding: 26,
    marginVertical: 50,
    backgroundColor: '#dbf0f7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cce7ef',
    justifyContent: 'center', 
    marginHorizontal: 1, // Espaçamento horizontal entre os cartões
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#000000',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },
  // Adicione estilos para os itens de consulta e medicamento
  Exametitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  MedicTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  MedicText: {
    fontSize: 14,
    color: '#666',
  },
  InfoText: {
    fontSize: 14,
    color: '#666',
  },
});
