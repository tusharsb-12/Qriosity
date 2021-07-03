import { GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAIL } from '../constants';

const questionReducer = (questions = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS_SUCCESS:
      return action.payload;
    case GET_QUESTIONS_FAIL:
      return action.payload;
    default:
      return questions;
  }
};

export default questionReducer;
