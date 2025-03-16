import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LogoPrincipal from "../../assets/LogoPrincipal.svg";

export default function CadastroScreen() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleCadastro = () => {
    if (!name || !cpf || !email || !password) {
      Alert.alert("Erro", "Todos os campos são obrigatórios");
      return;
    }
  
    const userData = {
      username: name.trim(),
      password: password.trim(),
      cpf: cpf.trim(),
      email: email.trim(),
      linked_user_id: "",
    };
  
    console.log("📤 Enviando dados para ProfileSelectionScreen:", userData); // Debug
  
    if (!userData.username || !userData.cpf || !userData.password) {
      Alert.alert("Erro", "Houve um erro ao coletar os dados.");
      return;
    }
  
    navigation.navigate("ProfileSelectionScreen", { userData }); // Envia os dados
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoPrincipal width={200} height={200} />
      </View>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="CPF" value={cpf} onChangeText={setCpf} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#ffffff" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: "#307cca" },
  input: { height: 40, borderColor: "#3468bb", borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, borderRadius: 5, color: "#3468bb" },
  button: { backgroundColor: "#d7e3f0", padding: 10, borderRadius: 5, alignItems: "center", marginTop: 10 },
  buttonText: { color: "#3073c5", fontSize: 16, fontWeight: "bold" },
  logoContainer: { alignItems: "center", marginBottom: 20 },
});
