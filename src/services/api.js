import axios from 'axios';

// ⚡ Ensure this base URL matches your backend port exactly!
const API = axios.create({
  baseURL: 'https://cafe-backend-mjv4.onrender.com/api',  // Use the exact IP your backend is running on
});

export const createReservation = (data) => API.post('/reservation', data);
export const submitContactForm = (data) => API.post('/contact', data);
export const fetchMenu = () => API.get('/menu');

export default API;