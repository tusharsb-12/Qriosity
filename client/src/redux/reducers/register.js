import { REGISTER_SUCCESS, REGISTER_FAIL } from '../constants';

const authReducer = (authState = {}, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('userToken', action.payload.token);
      return action.payload;
    case REGISTER_FAIL:
      return action.payload.err;
    default:
      return authState;
  }
};

export default authReducer;
