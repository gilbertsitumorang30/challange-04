import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ms} from 'react-native-size-matters';

const CustomButton = ({title, ...res}) => {
  return (
    <TouchableOpacity {...res}>
      <LinearGradient
        colors={['#00CBFF', '#00728F']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 5,
    height: ms(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: ms(14),
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
