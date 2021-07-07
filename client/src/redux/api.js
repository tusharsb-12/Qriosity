const axios = require('axios');

const API = axios.create({
  baseURL: 'https://qriosity-server.herokuapp.com/api/',
  // baseURL: 'http://localhost:5000/api',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('userToken')) {
    req.headers.authorization = `user-token ${localStorage.getItem(
      'userToken'
    )}`;
  }
  return req;
});

// Auth
const register = (formData) => API.post('/auth/register', formData);
const login = (formData) => API.post('/auth/login', formData);
const logout = () => API.get('/auth/logout');

// Quiz
const createQuiz = (formData) => API.post('/quiz/create', formData);
const getQuizInfo = (quizId) => API.get(`/quiz/${quizId}`);
const saveResponse = (response) =>
  API.post(`/response/save-response`, response);

// Questions
const getQuestions = (quizId) => API.get(`/question/${quizId}`);

module.exports = {
  register,
  login,
  logout,
  createQuiz,
  getQuizInfo,
  getQuestions,
  saveResponse,
};
