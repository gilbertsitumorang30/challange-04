import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {navigationRef} from '../helpers/navigate';
import AuthRouter from './AuthRouter';

const RootRouter = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthRouter />
    </NavigationContainer>
  );
};

export default RootRouter;

const styles = StyleSheet.create({});
