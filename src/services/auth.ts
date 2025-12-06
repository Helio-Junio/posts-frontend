// src/services/auth.ts
import axios from 'axios';
import { UserRegister } from '../types/User';

const authApi = axios.create({
  baseURL: 'http://localhost:8080/auth', // Ajuste conforme a rota do seu backend
});

export const register = async (user: { username: string; email: string; password: string }) => {
  const response = await authApi.post('/register', user);
  return response.data;
};

export const login = async (credentials: { username: string; password: string }) => {
  const response = await authApi.post('/login', credentials);
  return response.data; // Retorna todos os dados (token, username, email, etc.)
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};
