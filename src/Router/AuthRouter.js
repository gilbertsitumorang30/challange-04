import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useSelector} from 'react-redux';
import {Login, Register, RegistrasiComplete} from '../screens';
import HomeRouter from './HomeRouter';

const Stack = createStackNavigator();

const AuthRouter = () => {
  const token = useSelector(state => state.globalReducer.token);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      {token === null ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="Complete Register"
            component={RegistrasiComplete}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="HomeRouter" component={HomeRouter} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthRouter;
