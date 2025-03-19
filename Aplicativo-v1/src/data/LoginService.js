import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import qs from 'qs'; // Importa para garantir o formato correto

// 🔐 Login do usuário
export const loginUser = async (username, password) => {
  try {
    console.log("📤 Enviando login para API:", { username, password });
    console.log("URL da requisição:", `${API_URL}/token`);

    const formData = qs.stringify({
      grant_type: "password",
      username: username,
      password: password
    });


    const response = await api.post('/users/token', formData, {
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json" // Adiciona para garantir resposta JSON
      }
    });

    console.log("✅ Token recebido:", response.data);

    if (response.data.access_token) {
      await AsyncStorage.setItem("authToken", response.data.access_token);
      return response.data;
    } else {
      throw new Error("Token não recebido.");
    }

  } catch (error) {
    console.error("❌ Erro ao fazer login:", error.response?.data || error);
    return null;

  }

};
export const getUserByCPF = async (cpf) => {
  try {
    const response = await api.get(`/users/${cpf}`);
    console.log('📥 Usuário encontrado:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao buscar usuário:', error.response?.data || error);
    return null;
  }
};

