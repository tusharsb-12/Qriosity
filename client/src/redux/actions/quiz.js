import * as api from '../api';
import {
  CREATE_QUIZ_SUCCESS,
  CREATE_QUIZ_FAIL,
  GET_QUIZ_SUCCESS,
  GET_QUIZ_FAIL,
  QUIZ_SUBMIT_SUCCESS,
  QUIZ_SUBMIT_FAIL,
} from '../constants';

export const createQuiz = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createQuiz(formData);
    dispatch({ type: CREATE_QUIZ_SUCCESS, payload: data });
  } catch (err) {
    const { data } = err.response;
    dispatch({ type: CREATE_QUIZ_FAIL, payload: data });
  }
};

export const getQuizInfo = (quizId) => async (dispatch) => {
  try {
    const { data } = await api.getQuizInfo(quizId);
    dispatch({ type: GET_QUIZ_SUCCESS, payload: data });
  } catch (err) {
    const { data } = err.response;
    dispatch({ type: GET_QUIZ_FAIL, payload: data });
  }
};

export const submitQuizResponse = (response) => async (dispatch) => {
  try {
    const { data } = await api.saveResponse(response);
    dispatch({ type: QUIZ_SUBMIT_SUCCESS, payload: data });
  } catch (err) {
    const { data } = err.response;
    dispatch({ type: QUIZ_SUBMIT_FAIL, payload: data });
  }
};
