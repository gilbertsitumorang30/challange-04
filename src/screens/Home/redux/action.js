import axios from 'axios';
import {BASE_URL} from '../../../helpers/api';
import {setLoading} from '../../../redux/actions';
import {store} from '../../../redux/store';

const token = store.getState().globalReducer.token;

export const getBookList = () => async dispatch => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get(`${BASE_URL}/api/v1/books`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setBookList(res.data.results));
  } catch (error) {
    console.log(error.response);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getDetailBook = bookId => async dispatch => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get(`${BASE_URL}/api/v1/books/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setDetailBook(res.data));
  } catch (error) {
    console.log(error.response);
  } finally {
    dispatch(setLoading(false));
  }
};

export const setBookList = books => {
  return {
    type: 'SET_BOOK',
    payload: books,
  };
};

export const setDetailBook = book => {
  return {
    type: 'SET_DETAIL_BOOK',
    payload: book,
  };
};

export const setLogout = token => {
  return {
    type: 'SET_LOGOUT',
    payload: token,
  };
};
