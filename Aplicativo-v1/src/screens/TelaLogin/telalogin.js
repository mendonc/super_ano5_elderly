import React, { useState, useEffect } from "react";
import { 
  View, Text, TextInput, StyleSheet, 
  TouchableOpacity, Alert, ActivityIndicator 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoPrincipal from "../../assets/LogoPrincipal.svg";
import { loginUser } from "../../data/LoginService";  
import NetInfo from '@react-native-community/netinfo'; // Importa o NetInfo

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOffline, setIsOffline] = useState(false); // Para checar se está offline
  const navigation = useNavigation();

  // Função para checar a conectividade com a internet
  const checkNetworkStatus = async () => {
    const state = await NetInfo.fetch();
    setIsOffline(!state.isConnected); // Se não estiver conectado, define como offline
    if (!state.isConnected) {
      Alert.alert("Erro de Conexão", "Você está offline, verifique sua conexão com a internet.");
    }
  };

  // Usa o hook useEffect para verificar a rede assim que o componente for montado
  useEffect(() => {
    checkNetworkStatus(); // Verifica a conexão quando o componente é carregado

    // Adiciona um listener para mudanças na rede
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOffline(!state.isConnected);
      if (!state.isConnected) {
        Alert.alert("Erro de Conexão", "Você está offline, verifique sua conexão com a internet.");
      }
    });

    // Limpeza do listener quando o componente for desmontado
    return () => unsubscribe();
  }, []);

  
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Erro", "Todos os campos são obrigatórios");
      return;
    }
  
    if (isOffline) return;
  
    setLoading(true);
    const result = await loginUser(username, password); // Envia username e password
    setLoading(false);
  
    if (result && result.access_token) {
      try {
        await AsyncStorage.setItem("token", result.access_token);
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        setUsername("");
        setPassword("");
        navigation.navigate("ProfileSelectionScreen");
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
        placeholder="Username"  // Alterado para "Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
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
        disabled={loading || isOffline} // Desabilita o botão se estiver fazendo login ou offline
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
