import api from './api';

// 🔐 Login do usuário (retorna o token JWT)

export const loginUser = async (username, password) => {
  try {
      const API_URL = "http://192.168.0.105:8000"; // Altere para o seu URL correto da API

      console.log("📤 Enviando login para API:", { username, password });

      const formBody = new URLSearchParams();
      formBody.append("grant_type", "password"); // Isso é obrigatório para FastAPI
      formBody.append("username", username); // Certifique-se de que o username seja o correto (pode ser email, CPF, etc.)
      formBody.append("password", password);

      const response = await fetch(`${API_URL}/token`, { // Certifique-se de que o endpoint seja correto
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
      });

      console.log("📥 Resposta da API (raw):", response);

      if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Erro: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log("✅ Token recebido:", data);
      return data;
  } catch (error) {
      console.error("❌ Erro ao fazer login:", error.message);
      return null;
  }
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
