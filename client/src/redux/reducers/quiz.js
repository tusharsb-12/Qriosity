import {
  CREATE_QUIZ_SUCCESS,
  CREATE_QUIZ_FAIL,
  GET_QUIZ_FAIL,
  GET_QUIZ_SUCCESS,
} from '../constants';

const quizReducer = (quizState = {}, action) => {
  switch (action.type) {
    case CREATE_QUIZ_SUCCESS:
      return action.payload;
    case CREATE_QUIZ_FAIL:
      return action.payload;
    case GET_QUIZ_SUCCESS:
      return action.payload;
    case GET_QUIZ_FAIL:
      return action.payload;
    default:
      return quizState;
  }
};

export default quizReducer;
