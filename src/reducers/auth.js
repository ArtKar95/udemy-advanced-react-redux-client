import { AUTH, ERROR } from '../actions/types';

const initialState = {
  auth: '',
  error: '',
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH: {
      return { ...state, auth: action.payload };
    }
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
