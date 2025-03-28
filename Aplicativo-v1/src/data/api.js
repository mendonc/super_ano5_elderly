import axios from 'axios';

// Para emulador Android: http://10.0.2.2:8000 | e para android local seu ipv4 em ipconfig no terminal.
const API_BASE_URL = 'http://192.168.100.18:8000'; 
//TROQUE ESSE IP PARA O SEU IP


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
