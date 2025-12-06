// src/services/api.ts
import axios from 'axios';
import { getToken } from './auth';
import { PostCreate } from '../types/Post';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

// Adiciona o token a todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('Token adicionado ao cabeçalho:', token); // Adicione este log para debug
    } else {
      console.warn('Nenhum token encontrado no localStorage'); // Adicione este log para debug
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const getPostById = async (id: number) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (post: { titulo: string; conteudo: string }) => {
  const response = await api.post('/posts', post);
  return response.data;
};

export const updatePost = async (id: number, post: { title: string; content: string }) => {
  const response = await api.put(`/posts/${id}`, post);
  return response.data;
};

export const deletePost = async (id: number) => {
  const response = await api.delete(`/posts/${id}`);
  return response.data;
};

export default api;
