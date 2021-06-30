import { LOGIN_SUCCESS, LOGIN_FAIL } from '../constants';

const loginReducer = (loginState = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('userToken', action.payload.token);
      return action.payload;
    case LOGIN_FAIL:
      return action.payload.err;
    default:
      return loginState;
  }
};

export default loginReducer;
