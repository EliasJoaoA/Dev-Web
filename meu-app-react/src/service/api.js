import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001', //porta da api -> npx
});

export default api;