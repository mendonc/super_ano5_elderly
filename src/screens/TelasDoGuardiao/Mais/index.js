import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MaisScreen() {
  const navigation = useNavigation();

  const options = [
    { id: '1', name: 'Dados pessoais', route: 'DadosPessoais' },
    { id: '2', name: 'Dados da Conta', route: 'DadosDaConta' },
    { id: '3', name: 'Configurações', route: 'Configuracoes' },
    { id: '4', name: 'Ajuda', route: 'Ajuda' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sabrina</Text>
      <Text style={styles.subHeader}>Guardião</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={styles.optionContainer}
          onPress={() => navigation.navigate(option.route)}
        >
          <Text style={styles.optionText}>{option.name}</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  subHeader: {
    fontSize: 16,
    color: '#777777',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  optionText: {
    fontSize: 16,
    color: '#333333',
  },
  arrow: {
    fontSize: 16,
    color: '#999999',
  },
});
