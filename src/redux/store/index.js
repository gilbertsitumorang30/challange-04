import {createStore, applyMiddleware} from 'redux';

//middleware
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//storage
import {allReducers} from './allReducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistStore, persistReducer} from 'redux-persist';

const config = {
  key: 'halohalohalo',
  storage: AsyncStorage,
  timeOut: null,
  whitelist: ['globalReducer'],
};

const persistedReducer = persistReducer(config, allReducers);

const allMiddlewres = applyMiddleware(logger, thunk);

export const store = createStore(persistedReducer, {}, allMiddlewres);
export const persistedStore = persistStore(store);
