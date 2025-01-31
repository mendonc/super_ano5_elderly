import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MedicamentoCard = ({ medicamento }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{medicamento.name}</Text>
      <Text style={styles.dosage}>{medicamento.dosage}</Text>
      <Text style={styles.frequency}>{medicamento.frequency}</Text>
      <Text style={styles.indication}>{medicamento.indication}</Text>
      {medicamento.notes && <Text style={styles.notes}>{medicamento.notes}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dosage: {
    fontSize: 14,
    color: '#555',
  },
  frequency: {
    fontSize: 14,
    color: '#555',
  },  
  indication: {
    fontSize: 14,
    color: '#555',
  },
  notes: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

export default MedicamentoCard;
