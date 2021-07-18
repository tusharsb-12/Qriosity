import { GET_USER_SUCCESS, GET_USER_FAIL } from '../constants';

const userReducer = (userState = {}, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return action.payload;
    case GET_USER_FAIL:
      return action.payload.err;
    default:
      return userState;
  }
};

export default userReducer;
