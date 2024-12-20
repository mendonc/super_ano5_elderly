const mockMessages = [
    {
        id: '1',
        name: 'João Silva',
        lastMessage: 'Obrigado pela consulta, doutor.',
        lastMessageTime: '10:15',
        chatHistory: [
            { id: '1', text: 'Olá, doutor!', sender: 'patient' },
            { id: '2', text: 'Como está se sentindo?', sender: 'doctor' },
            { id: '3', text: 'Obrigado pela consulta, doutor.', sender: 'patient' },
        ],
    },
    {
        id: '2',
        name: 'Maria Souza',
        lastMessage: 'Posso agendar outra consulta?',
        lastMessageTime: 'Ontem',
        chatHistory: [
            { id: '1', text: 'Doutor, estou me sentindo melhor.', sender: 'patient' },
            { id: '2', text: 'Que bom! Precisa de mais alguma coisa?', sender: 'doctor' },
            { id: '3', text: 'Posso agendar outra consulta?', sender: 'patient' },
        ],
    },
    {
        id: '3',
        name: 'Carlos Almeida',
        lastMessage: 'Me senti melhor com o novo remédio.',
        lastMessageTime: '20/12',
        chatHistory: [
            { id: '1', text: 'O novo remédio ajudou?', sender: 'doctor' },
            { id: '2', text: 'Sim, me senti melhor com o novo remédio.', sender: 'patient' },
        ],
    },
    {
        id: '4',
        name: 'Ana Pereira',
        lastMessage: 'Preciso de uma receita.',
        lastMessageTime: '19/12',
        chatHistory: [
            { id: '1', text: 'Doutor, minha receita acabou.', sender: 'patient' },
            { id: '2', text: 'Certo, vou emitir uma nova.', sender: 'doctor' },
            { id: '3', text: 'Preciso de uma receita.', sender: 'patient' },
        ],
    },
];

export default mockMessages;
