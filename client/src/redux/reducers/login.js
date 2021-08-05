import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from '../constants';

const loginReducer = (loginState = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('userToken', action.payload.token);
      return action.payload;
    case LOGIN_FAIL:
      return action.payload.err;
    case LOGOUT_SUCCESS:
      localStorage.removeItem('userToken');
      return action.payload;
    case LOGOUT_FAIL:
      return {};
    default:
      return loginState;
  }
};

export default loginReducer;
