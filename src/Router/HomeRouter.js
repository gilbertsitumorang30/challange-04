import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Detail, Login} from '../screens';

const Stack = createStackNavigator();

const HomeRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default HomeRouter;
