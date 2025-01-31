import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const MedicamentoList = ({ medicamentos, onEdit }) => {
  if (!medicamentos || medicamentos.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.emptyText}>Nenhum medicamento encontrado.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        loop={false} // Desativa o loop dos slides
        showsPagination={true} // Mostra os pontos de paginação
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        showsButtons={true} // Mostra botões de navegação
      >
        {medicamentos.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>
              {item.description || 'Sem descrição'}
            </Text>
            <Text style={styles.details}>
              Dosagem: {item.dosage} | Frequência: {item.frequency}
            </Text>
            <Text style={styles.indication}>{item.indication}</Text>
            {item.notes && <Text style={styles.notes}>Nota: {item.notes}</Text>}
            <TouchableOpacity style={styles.editButton} onPress={() => onEdit(item)}>
            <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
 
    width: width * 0.9, // Ajusta o tamanho do cartão ao tamanho da tela
    alignSelf: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#dbf0f7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cce7ef',

  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  description: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
  indication: {
    fontSize: 13,
    color: '#555555',
    marginBottom: 5,
  },
  notes: {
    fontSize: 12,
    color: '#777777',
    fontStyle: 'italic',
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
  emptyText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
  editButton: {
    backgroundColor: '#007aff', // Cor verde para o botão de editar
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%', // Ocupa toda a largura disponível dentro do card
  },
  editButtonText: {
    color: '#fff', // Cor do texto
    textAlign: 'center', // Centraliza o texto
    fontWeight: 'bold',
  },
});

export default MedicamentoList;
