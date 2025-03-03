import api from './api';

// 🔹 Mapear emoções para valores numéricos
const emotionMap = {
  "muito mal": 1,
  "ruim": 2,
  "neutro": 3,
  "bem": 4,
  "muito bem": 5,
};

// 🔹 Adicionar humor (bem-estar)
export const addHumor = async (userId, emotionLabel) => {
  if (!emotionLabel || typeof emotionLabel !== "string") {
    console.error("❌ Erro: Emoção inválida recebida.", emotionLabel);
    return null;
  }

  const formattedEmotion = emotionLabel.toLowerCase().trim();
  const severity = emotionMap[formattedEmotion];

  if (!severity) {
    console.error("❌ Erro: Emoção inválida. Valor recebido:", formattedEmotion);
    return null;
  }

  const humorData = {
    symptom_type: "bem-estar",
    severity: severity,
    user_id: userId,
  };

  try {
    console.log("📤 Tentando salvar humor:", humorData);
    const response = await api.post('/symptoms/', humorData);
    console.log("✅ Humor salvo com sucesso!", response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao salvar humor:', error.response?.data || error);
    return null;
  }
};

// 🔹 Buscar humor do usuário (corrigido para pegar o ID correto)
export const getHumor = async (userId) => {
  try {
    const response = await api.get(`/symptoms/symptoms/${userId}`);
    if (response.data.length > 0) {
      const symptom = response.data[0]; // Primeiro sintoma salvo do dia
      console.log("📥 Humor recebido:", symptom);
      return {
        id: symptom.id, // Pegamos o ID correto para edições futuras
        severity: symptom.severity,
        label: Object.keys(emotionMap).find(key => emotionMap[key] === symptom.severity),
      };
    }
    return null;
  } catch (error) {
    console.error('❌ Erro ao buscar humor:', error.response?.data || error);
    return null;
  }
};

// 🔹 Atualizar humor (corrigido para enviar `symptom_type` e `symptom_id`)
export const updateHumor = async (symptomId, emotionLabel) => {
  const formattedEmotion = emotionLabel.toLowerCase().trim();
  const severity = emotionMap[formattedEmotion];

  if (!severity) {
    console.error("❌ Erro: Emoção inválida. Valor recebido:", formattedEmotion);
    return null;
  }

  try {
    console.log("🔄 Atualizando humor para severidade:", severity);
    const response = await api.put(`/symptoms/symptoms/${symptomId}`, {
      symptom_type: "bem-estar",
      severity: severity,
    });
    console.log("✅ Humor atualizado com sucesso!", response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Erro ao atualizar humor:', error.response?.data || error);
    return null;
  }
};

// 🔹 Deletar humor (corrigido para usar symptomId)
export const deleteHumor = async (symptomId) => {
  try {
    console.log("🗑️ Deletando humor...");
    await api.delete(`/symptoms/${symptomId}`);
    console.log("✅ Humor deletado com sucesso!");
    return true;
  } catch (error) {
    console.error('❌ Erro ao deletar humor:', error.response?.data || error);
    return false;
  }
};