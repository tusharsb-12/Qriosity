import { combineReducers } from 'redux';
import registerReducer from './register';
import loginReducer from './login';
import quizReducer from './quiz';
import questionReducer from './questions';
import quizResponseReducer from './quizResponse';
import userReducer from './user';

export default combineReducers({
  registerReducer,
  loginReducer,
  quizReducer,
  questionReducer,
  quizResponseReducer,
  userReducer,
});
