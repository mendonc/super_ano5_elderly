import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Projeto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupar todo o espaço disponível
    justifyContent: 'center', // Centralizar verticalmente
    alignItems: 'center', // Centralizar horizontalmente
    backgroundColor: '#F5FCFF', // Opcional, definir uma cor de fundo
  },
  text: {
    fontSize: 24, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  },
});

export default App;
