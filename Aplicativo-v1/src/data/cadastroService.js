const API_URL = 'http://10.0.2.2:8000/users/'; // Confirme a URL correta

export const cadastrarUsuario = async (userData) => {
  console.log('📤 Enviando dados para o backend:', userData);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    console.log('📥 Resposta do backend:', response);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Erro retornado pelo backend:', errorData);
      throw new Error(errorData.detail || 'Erro ao cadastrar usuário');
    }

    return await response.json();
  } catch (error) {
    console.error('❌ Erro ao cadastrar usuário:', error);
    throw error;
  }
};
