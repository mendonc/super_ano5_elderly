import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const MedicamentoCard = ({ medicamento, onEdit, onDelete }) => {
  // Função para editar medicamento
  const handleEditar = () => {
    if (!medicamento.id) {
      console.error("❌ Erro: ID do medicamento não está disponível!", medicamento);
      return;
    }
  
    onEdit(medicamento); // Passa o medicamento completo para a função de edição
  };

  // Função para deletar medicamento com confirmação
  const handleDeletar = () => {
    if (!medicamento.id) {
      console.error("❌ Erro: ID do medicamento não está disponível!", medicamento);
      return;
    }

    Alert.alert(
      "Excluir Medicamento",
      `Tem certeza que deseja excluir \"${medicamento.name}\"? Essa ação não pode ser desfeita.`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sim, excluir",
          onPress: () => onDelete(medicamento.id),
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{medicamento.name}</Text>
      <Text style={styles.dosage}>Dosagem: {medicamento.dosage}</Text>
      <Text style={styles.frequency}>Frequência: {medicamento.frequency}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleEditar} style={styles.editButton}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeletar} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  dosage: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  frequency: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MedicamentoCard;
