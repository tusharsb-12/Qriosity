import { QUIZ_RESPONSE_SUCCESS, QUIZ_RESPONSE_FAIL } from '../constants';

const quizResponseReducer = (responseState = {}, action) => {
  switch (action.type) {
    case QUIZ_RESPONSE_SUCCESS:
      return action.payload;
    case QUIZ_RESPONSE_FAIL:
      return action.payload;
    default:
      return responseState;
  }
};

export default quizResponseReducer;
