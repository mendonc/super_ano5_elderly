import axios from 'axios';

const API_BASE_URL = 'http://192.168.0.105:8000'; // Para emulador Android: http://10.0.2.2:8000 | e para android local seu ipv4 em ipconfig no terminal.



const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
