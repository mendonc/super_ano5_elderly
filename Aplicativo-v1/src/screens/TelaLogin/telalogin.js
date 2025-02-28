import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LogoPrincipal from "../../assets/LogoPrincipal.svg";
import { loginUser } from "../../data/LoginService";  // Importe a função de login do backend

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);  // Estado para o carregamento
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Erro", "Todos os campos são obrigatórios");
      return;
    }

    setLoading(true);  // Ativa o carregamento

    // Realiza o login na API
    const result = await loginUser(username, password);

    setLoading(false);  // Desativa o carregamento

    if (result) {
      // Se o login for bem-sucedido
      Alert.alert("Sucesso", "Login realizado com sucesso!");
      navigation.navigate("ProfileSelectionScreen");
    } else {
      // Se houver um erro no login
      Alert.alert("Erro", "Credenciais inválidas ou erro ao fazer login.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoPrincipal width={400} height={400} />
      </View>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
        keyboardType="default"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#3073c5" />  // Indicador de carregamento
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate("CadastroScreen")}>
        <Text style={styles.linkText}>Não possuo cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#307cca",
  },
  input: {
    height: 40,
    borderColor: "#3468bb",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "#3468bb",
  },
  button: {
    backgroundColor: "#d7e3f0",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#3073c5",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkButton: {
    marginTop: 10,
    alignItems: "center",
  },
  linkText: {
    color: "#3073c5",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  logoContainer: {
    padding: 1,
    top: -50,
    marginHorizontal: -50,
    marginVertical: -170,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
});
