import api from './api';
const userId = "99977755533"; 

// Buscar todos os medicamentos de um paciente específico
export const getMedicamentos = async (userId) => {
  try {
    const response = await api.get(`/medications/${userId}`);
    console.log('Dados recebidos do backend:', response.data); // 🔥 Log dos dados recebidos
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar medicamentos:', error);
    return [];
  }
};


// Adicionar um novo medicamento
export const addMedicamento = async (medicamento) => {
    try {
      console.log("🔍 Enviando medicamento:", medicamento);  // Verificar o payload no console
      const response = await api.post('/medications/medications/', medicamento);
      console.log("✅ Medicamento adicionado com sucesso!", response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Erro ao adicionar medicamento:', error.response?.data || error);
      return null;
    }
  };  

// Atualizar um medicamento existente
export const updateMedicamento = async (medicationId, medicamento) => {
  try {
    const response = await api.put(`/medications/medications/${medicationId}`, medicamento);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar medicamento:', error);
    return null;
  }
};


// Deletar um medicamento
export const deleteMedicamento = async (medicationId) => {
  try {
    await api.delete(`/medications/${medicationId}`);
    return true;
  } catch (error) {
    console.error('Erro ao deletar medicamento:', error);
    return false;
  }
};
