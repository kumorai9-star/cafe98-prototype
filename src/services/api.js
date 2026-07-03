import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000
});

export const fetchMenu = () => API.get('/menu');
export const createReservation = (data) => API.post('/reservation', data);
export const submitContactForm = (data) => API.post('/contact', data);

export default API;