import api from './api';

// Buscar todos os medicamentos de um paciente específico
export const getMedicamentos = async (userId) => {
  try {
    const response = await api.get(`/medications/${userId}`);
    console.log('📥 Dados recebidos do backend:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao buscar medicamentos:', error);
    return [];
  }
};

// Adicionar um novo medicamento
export const addMedicamento = async (medicamento) => {
  try {
    console.log("🔍 Enviando medicamento:", medicamento);
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
  if (!medicationId) {
    console.error("❌ Erro: ID do medicamento é inválido ao tentar atualizar.");
    return null;
  }

  try {
    console.log(`🔄 Atualizando medicamento com ID: ${medicationId}`);
    const response = await api.put(`/medications/medications/${medicationId}`, medicamento); // Ajustado o endpoint
    console.log("✅ Medicamento atualizado com sucesso!", response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao atualizar medicamento:', error.response?.data || error);
    return null;
  }
};


// Deletar um medicamento
export const deleteMedicamento = async (medicationId) => {
  if (!medicationId) {
    console.error("❌ Erro: ID do medicamento é inválido ao tentar deletar.");
    return false;
  }

  try {
    console.log(`🗑️ Deletando medicamento com ID: ${medicationId}`);
    await api.delete(`/medications/medications/${medicationId}`); // Ajustado o endpoint
    console.log("✅ Medicamento deletado com sucesso!");
    return true;
  } catch (error) {
    console.error('❌ Erro ao deletar medicamento:', error.response?.data || error);
    return false;
  }
};

