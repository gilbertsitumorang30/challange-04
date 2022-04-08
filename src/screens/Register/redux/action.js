import axios from 'axios';
import {REGISTER} from 'redux-persist';
import {BASE_URL} from '../../../helpers/api';
import {navigate} from '../../../helpers/navigate';
import {setLoading} from '../../../redux/actions';

export const getRegister = (fullName, email, password) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post(`${BASE_URL}/api/v1/auth/register`, {
      email: email,
      password: password,
      name: fullName,
    });
    dispatch(setRegister(res.data));
    navigate('Complete Register');
  } catch (error) {
    console.log(error.response);
  } finally {
    dispatch(setLoading(false));
  }
};

export const setRegister = data => {
  return {
    type: 'SET_REGISTER',
    payload: data,
  };
};
