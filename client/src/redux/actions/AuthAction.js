import { CHECK_USER, CREATE_USER, LOGOUT_USER } from '../types/userTypes';

export const createUser = (data) => ({ type: CREATE_USER, payload: data });
export const checkUser = (data) => ({ type: CHECK_USER, payload: data });
export const userLogout = () => ({ type: LOGOUT_USER, payload: null });

export const userAuthThunk = (loginToggle, body) => async (dispatch) => {
  const response = await fetch(loginToggle ? '/signin' : '/signup', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  console.log('=======>', response);
  const result = await response.json();
  dispatch(createUser(result));
};

export const userCheckAuthThunk = () => async (dispatch) => {
  const response = await fetch('/auth');
  const result = await response.json();
  console.log('=======>', result);
  dispatch(checkUser(result));
};

export const userLogoutThunk = () => async (dispatch) => {
  await fetch('/logout');
  dispatch(userLogout());
};