import {combineReducers} from 'redux';
import {globalReducer} from '../reducers';
import {homeReducer} from '../../screens/Home/redux/reducer';
import {registerReducer} from '../../screens/Register/redux/reducer';

export const allReducers = combineReducers({
  globalReducer,
  homeReducer,
  registerReducer,
});
