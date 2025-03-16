import React, { useState, useEffect } from "react";
import { 
  View, Text, TextInput, StyleSheet, 
  TouchableOpacity, Alert, ActivityIndicator 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoPrincipal from "../../assets/LogoPrincipal.svg";
import { loginUser, getUserByCPF } from "../../data/LoginService";  
import NetInfo from '@react-native-community/netinfo'; 

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const navigation = useNavigation();

  // 🔹 Verifica se já existe um usuário logado
  useEffect(() => {
    const checkUserLogin = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const cpf = await AsyncStorage.getItem("userCPF");

      if (token && cpf) {
        console.log("✅ Usuário já logado. Verificando role...");
        const userData = await getUserByCPF(cpf);

        if (userData && userData.role) {
          redirectToRole(userData.role);
        } else {
          console.log("⚠️ Erro ao obter o role do usuário.");
          Alert.alert("Erro", "Não foi possível verificar seu perfil.");
        }
      }
    };

    checkUserLogin();
  }, []);

  // 🔹 Redireciona o usuário com base no role
  const redirectToRole = (role) => {
    console.log(`Role recebido: ${role}`);
    let screen = "ProfileSelectionScreen"; // Fallback

    if (role === "paciente") {
      screen = "PacienteStack";
    } else if (role === "medico") {
      screen = "MedicoStack";
    } else if (role === "guardião") {
      screen = "GuardiaoStack";
    }

    console.log(`🔀 Redirecionando para: ${screen}`);
    navigation.reset({
      index: 0,
      routes: [{ name: screen }], // Remove a tela de login da pilha
    });
  };

  // 🔹 Lógica de login
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Erro", "Todos os campos são obrigatórios");
      return;
    }

    if (isOffline) return;

    setLoading(true);
    const result = await loginUser(username, password);
    setLoading(false);

    console.log("🔍 Resposta da API:", result);

    if (result && result.access_token) {
      try {
        await AsyncStorage.setItem("authToken", result.access_token);
        await AsyncStorage.setItem("userCPF", username); // Salva CPF para buscar os dados depois

        const userData = await getUserByCPF(username); // Obtém os dados do usuário
        console.log("Dados do usuário obtidos:", userData);
        if (userData && userData.role) {
          redirectToRole(userData.role);
        } else {
          Alert.alert("Erro", "Erro ao obter o perfil do usuário.");
        }
      } catch (error) {
        console.error("Erro ao salvar token:", error);
        Alert.alert("Erro", "Ocorreu um erro ao salvar as credenciais.");
      }
    } else {
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
        keyboardType="numeric"
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
      <TouchableOpacity 
        style={[styles.button, { opacity: loading || isOffline ? 0.6 : 1 }]} 
        onPress={handleLogin} 
        disabled={loading || isOffline}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#3073c5" />
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
