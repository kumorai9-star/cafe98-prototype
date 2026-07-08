import axios from 'axios';

// ⚡ Ensure this base URL matches your backend port exactly!
const API = axios.create({
  baseURL: 'http://127.0.0.1:5000/api', // Use the exact IP your backend is running on
});

export const createReservation = (data) => API.post('/reservation', data);
export const submitContactForm = (data) => API.post('/contact', data);
export const fetchMenu = () => API.get('/menu');

export default API;