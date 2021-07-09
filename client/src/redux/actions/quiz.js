import * as api from '../api';
import {
  CREATE_QUIZ_SUCCESS,
  CREATE_QUIZ_FAIL,
  GET_QUIZ_SUCCESS,
  GET_QUIZ_FAIL,
  QUIZ_SUBMIT_SUCCESS,
  QUIZ_SUBMIT_FAIL,
} from '../constants';

// Create quiz
export const createQuiz = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createQuiz(formData);
    dispatch({ type: CREATE_QUIZ_SUCCESS, payload: data });
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
export const submitQuizResponse = (response) => async (dispatch) => {
  try {
    const { data } = await api.saveResponse(response);
    dispatch({ type: QUIZ_SUBMIT_SUCCESS, payload: data });
  } catch (err) {
    const { data } = err.response;
    dispatch({ type: QUIZ_SUBMIT_FAIL, payload: data });
  }
};
