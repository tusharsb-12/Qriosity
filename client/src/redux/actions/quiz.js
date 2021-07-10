import * as api from '../api';
import {
  CREATE_QUIZ_SUCCESS,
  CREATE_QUIZ_FAIL,
  GET_QUIZ_SUCCESS,
  GET_QUIZ_FAIL,
  QUIZ_SUBMIT_SUCCESS,
  QUIZ_SUBMIT_FAIL,
} from '../constants';
import calculateScore from '../../utils/score';

// Create quiz
export const createQuiz = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.createQuiz(formData);
    dispatch({ type: CREATE_QUIZ_SUCCESS, payload: data });
    history.push('/dashboard');
  } catch (err) {
    const { data } = err.response;
    dispatch({ type: CREATE_QUIZ_FAIL, payload: data });
  }
};

// Get all quizzes
export const getAllQuizzes = () => async (dispatch) => {
  try {
    const { data } = await api.getAllQuizzes();
    dispatch({ type: GET_QUIZ_SUCCESS, payload: data });
  } catch (err) {
    const { data } = err.response;
    dispatch({ type: GET_QUIZ_FAIL, payload: data });
  }
};

// Get info about a quiz
export const getQuizInfo = (quizId) => async (dispatch) => {
  try {
    const { data } = await api.getQuizInfo(quizId);
    dispatch({ type: GET_QUIZ_SUCCESS, payload: data });
  } catch (err) {
    const { data } = err.response;
    dispatch({ type: GET_QUIZ_FAIL, payload: data });
  }
};

// Submit quiz response
export const submitQuizResponse =
  (quizResponse, history) => async (dispatch) => {
    try {
      // Calculate score
      const { response } = quizResponse;
      const score = calculateScore(response);
      const { data } = await api.saveResponse({ ...quizResponse, score });
      dispatch({ type: QUIZ_SUBMIT_SUCCESS, payload: data });
      history.push('/score');
    } catch (err) {
      const { data } = err.response;
      dispatch({ type: QUIZ_SUBMIT_FAIL, payload: data });
    }
  };
