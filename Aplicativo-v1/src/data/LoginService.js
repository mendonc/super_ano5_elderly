import api from './api';

// 🔐 Login do usuário (retorna o token JWT)

export const loginUser = async (username, password) => {
  try {
    const API_URL = "http://192.168.0.105:8000"; // Confirme se o IP está correto

    console.log("📤 Enviando login para API:", { username, password });

    const formBody = new URLSearchParams();
    formBody.append("grant_type", "password");
    formBody.append("username", username);
    formBody.append("password", password);

    const response = await fetch(`${API_URL}/token`, {  // Endpoint corrigido
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody.toString(), 
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Erro na API:", errorText);
      throw new Error(`Erro ao fazer login: ${errorText}`);
    }

    const data = await response.json();
    console.log("✅ Token recebido:", data);

    if (data.access_token) {
      localStorage.setItem("authToken", data.access_token);
    } else {
      throw new Error("Token não recebido.");
    }

    return data; // Retorna os dados da API, incluindo o token

  } catch (error) {
    console.error("❌ Erro ao fazer login:", error.message);
    throw error; // Lança o erro para ser tratado no código que chamar essa função
  }
};

// Função para obter o token armazenado
export const getStoredToken = () => {
  return localStorage.getItem('authToken');
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
  const token = getStoredToken();
  return token !== null;  // Verifica se o token existe
};

// 🔍 Buscar usuário por CPF
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

// 📌 Criar novo usuário
export const createUser = async (userData) => {
    try {
      const response = await api.post('/users', userData);
      console.log('✅ Usuário criado com sucesso:', response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        // Erro vindo da resposta do servidor
        console.error('❌ Erro ao criar usuário:', error.response.data);
      } else if (error.request) {
        // Erro na requisição (servidor não respondeu)
        console.error('❌ Erro na requisição: Nenhuma resposta do servidor');
      } else {
        // Outro tipo de erro (ex: erro de código)
        console.error('❌ Erro inesperado:', error.message);
      }
      return null;
    }
  };
  

// ✏️ Atualizar usuário
export const updateUser = async (userId, userData) => {
  try {
    const response = await api.put(`/users/${userId}`, userData);
    console.log('✅ Usuário atualizado:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao atualizar usuário:', error.response?.data || error);
    return null;
  }
};

// 🗑️ Deletar usuário
export const deleteUser = async (userId) => {
  try {
    await api.delete(`/users/${userId}`);
    console.log('✅ Usuário deletado com sucesso!');
    return true;
  } catch (error) {
    console.error('❌ Erro ao deletar usuário:', error.response?.data || error);
    return false;
  }
};
