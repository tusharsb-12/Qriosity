const axios = require('axios');

const API = axios.create({
  baseURL: 'https://qriosity-server.herokuapp.com/api/',
});

const register = (formData) => API.post('/auth/register', formData);
const login = (formData) => API.post('/auth/login', formData);
const logout = () => API.get('/auth/logout');

module.exports = {
  register,
  login,
  logout,
};
