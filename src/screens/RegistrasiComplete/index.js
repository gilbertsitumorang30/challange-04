import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const RegistrasiComplete = ({navigation}) => {
  return (
    <View>
      <Text>RegistrasiComplete</Text>
      <Text onPress={() => navigation.navigate('Login')}>Kembali ke Login</Text>
    </View>
  );
};

export default RegistrasiComplete;

const styles = StyleSheet.create({});
