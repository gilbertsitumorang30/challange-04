import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistedStore, store} from './redux/store';
import RootRouter from './Router/RootRouter';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <RootRouter />
      </PersistGate>
    </Provider>
  );
};

export default App;
