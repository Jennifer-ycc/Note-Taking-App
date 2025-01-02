import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const signup = (formData) => API.post('/users/signup', formData);
export const login = (formData) => API.post('/users/login', formData);

export const fetchNotes = (token) =>
    API.get('/notes', { headers: { Authorization: token } });

export const createNote = (noteData, token) =>
    API.post('/notes', noteData, { headers: { Authorization: token } });
