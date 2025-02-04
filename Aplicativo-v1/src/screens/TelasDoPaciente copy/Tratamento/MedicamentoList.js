import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const MedicamentoList = ({ medicamentos, onEdit }) => {
  if (!medicamentos || medicamentos.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Nenhum medicamento encontrado.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={medicamentos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>
            Dosagem: {item.dosage} | Frequência: {item.frequency}
          </Text>
          <Text style={styles.indication}>{item.indication}</Text>
          {item.notes && <Text style={styles.notes}>Nota: {item.notes}</Text>}

          {/* Botão de Editar */}
          <TouchableOpacity style={styles.editButton} onPress={() => onEdit(item)}>
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#dbf0f7',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#cce7ef',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  indication: {
    fontSize: 13,
    color: '#555',
    marginBottom: 5,
  },
  notes: {
    fontSize: 12,
    color: '#777',
    fontStyle: 'italic',
  },
  editButton: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MedicamentoList;
