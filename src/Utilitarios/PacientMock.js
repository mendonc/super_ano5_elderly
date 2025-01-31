export const patientData = {
    id: '123456',
    name: 'João',
    secondname: 'Samabaio',
    age: 45,
    gender: 'Masculino',
    bloodType: 'O+',
    contact: {
      phone: '(11) 98765-4321',
      email: 'joao.samambaio@gmail.com',
    },
    address: {
      street: 'Rua das Palmeiras',
      number: 123,
      city: 'São Paulo',
      state: 'SP',
      zip: '01001-000',
    },
    healthInfo: {
      allergies: ['Amendoim', 'Lactose'],
      chronicConditions: ['Diabetes tipo 2', 'Hipertensão'],
      medications: [
        {
          name: 'Metformina',
          dosage: '850mg',
          frequency: '2x ao dia',
        },
        {
          name: 'Losartana',
          dosage: '50mg',
          frequency: '1x ao dia',
        },
      ],
    },
    appointments: [
      {
        id: '1',
        date: '2025-01-22',
        time: '14:00',
        specialty: 'Cardiologia',
        doctor: 'Dr. João Almeida',
        notes: 'Consulta de rotina para hipertensão.',
      },
      {
        id: '2',
        date: '2025-01-23',
        time: '10:30',
        specialty: 'Endocrinologia',
        doctor: 'Dra. Maria Souza',
        notes: 'Ajuste na medicação para diabetes.',
      },
    ],
    lastCheckup: {
      date: '2024-12-10',
      results: 'Sem alterações significativas.',
    },
  };
  