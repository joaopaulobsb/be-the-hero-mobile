import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.180.22.21:3333'
});

export default api;
