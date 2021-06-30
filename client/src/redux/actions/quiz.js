import * as api from '../api';
import { CREATE_QUIZ_SUCCESS, CREATE_QUIZ_FAIL } from '../constants';

export const createQuiz = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createQuiz(formData);
    dispatch({ type: CREATE_QUIZ_SUCCESS, payload: data });
  } catch (err) {
    const { data } = err.response;
    dispatch({ type: CREATE_QUIZ_FAIL, payload: data });
  }
};
