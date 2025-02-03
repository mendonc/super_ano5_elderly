const mockMessages = [
    {
      id: '1',
      name: 'Dr. José',
      lastMessage: 'Tome o remédio hoje.',
      lastMessageTime: '10:15',
      chatHistory: [
        { id: '1', text: 'Olá, tudo bem?', sender: 'doctor' },
        { id: '2', text: 'Sim, obrigado!', sender: 'guardiao' },
      ],
    },
    {
      id: '2',
      name: 'Dr. Ana',
      lastMessage: 'Preciso confirmar sua consulta.',
      lastMessageTime: 'Ontem',
      chatHistory: [
        { id: '1', text: 'Você poderá vir amanhã?', sender: 'doctor' },
        { id: '2', text: 'Sim, confirmo o horário.', sender: 'guardiao' },
      ],
    },
  ];
  
  export default mockMessages;
  