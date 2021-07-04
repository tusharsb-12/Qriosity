import { GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAIL } from '../constants';
import * as api from '../api';

export const getQuestions = (quizId) => async (dispatch) => {
  try {
    const { data } = await api.getQuestions(quizId);

    data.questions.map((question) => {
      question.answers = question.answers.map((answer) => ({
        ...answer,
        isSelected: false,
      }));
      return question;
    });

    dispatch({ type: GET_QUESTIONS_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    const { data } = err.response;
    dispatch({ type: GET_QUESTIONS_FAIL, payload: data });
  }
};
