import axios from 'axios';
import { AUTH, ERROR } from './types';

export const signUp = (formProps, callback) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:3007/signup',
        formProps
      );
      dispatch({
        type: AUTH,
        payload: response.data.token,
      });
      localStorage.setItem('token', response.data.token);
      callback();
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: 'email in use',
      });
    }
  };
};

export const signin = (formProps, callback) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:3007/signin',
        formProps
      );
      dispatch({
        type: AUTH,
        payload: response.data.token,
      });
      localStorage.setItem('token', response.data.token);
      callback();
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: 'email or password is wrong',
      });
    }
  };
};

export const signOut = () => async (dispatch) => {
  await localStorage.removeItem('token');
  dispatch({
    type: AUTH,
    payload: null,
  });
};
