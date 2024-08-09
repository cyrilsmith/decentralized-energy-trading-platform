import axios from 'axios';

export async function fetchUserProfile() {
  return axios.get('/api/user/profile');
}

export async function updateUserProfile(data: { name?: string; email?: string; preferences?: object }) {
  return axios.put('/api/user/profile', data);
}

export async function updateUserPassword(data: { currentPassword: string; newPassword: string }) {
  return axios.put('/api/user/password', data);
}
