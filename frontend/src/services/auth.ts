import axios from 'axios';

export async function login(data: { email: string; password: string }) {
  return axios.post('/api/login', data);
}

export async function register(data: { name: string; email: string; password: string }) {
  return axios.post('/api/register', data);
}

export async function logout() {
  return axios.post('/api/logout');
}
