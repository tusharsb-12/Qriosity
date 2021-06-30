import { combineReducers } from 'redux';
import registerReducer from './register';
import loginReducer from './login';
import quizReducer from './quiz';

export default combineReducers({
  registerReducer,
  loginReducer,
  quizReducer,
});
