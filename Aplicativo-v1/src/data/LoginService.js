import api from './api';

export const login = async (username, password, cpf, email) => {
  try {
    const response = await api.post('/token', { username, cpf, email, password });
    console.log('✅ Login bem-sucedido:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Erro no login:', error.response?.data || error);
    return null;
  }
};