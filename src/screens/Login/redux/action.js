import axios from 'axios';
import {BASE_URL} from '../../../helpers/api';
import {setLoading} from '../../../redux/actions';
import {navigate} from '../../../helpers/navigate';

export const setUser = (email, password) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post(`${BASE_URL}/api/v1/auth/login`, {
      email: email,
      password: password,
    });
    dispatch(setToken(res.data.tokens.access.token));
    navigate('HomeRouter');
  } catch (error) {
    console.log(error.response);
  } finally {
    dispatch(setLoading(false));
  }
};

const setToken = token => {
  return {
    type: 'SET_TOKEN',
    payload: token,
  };
};
