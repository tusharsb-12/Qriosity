import * as api from '../api';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../constants';

export const register = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: REGISTER_SUCCESS, payload: data });
    history.push('/dashboard');
  } catch (err) {
    const { data } = err.response;
    dispatch({ type: REGISTER_FAIL, payload: data });
  }
};

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    history.push('/dashboard');
  } catch (err) {
    const { data } = err.response;
    dispatch({ type: LOGIN_FAIL, payload: data });
  }
};
