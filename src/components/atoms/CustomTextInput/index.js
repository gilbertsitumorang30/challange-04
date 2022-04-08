import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ms} from 'react-native-size-matters';
import {white} from 'react-native-paper/lib/typescript/styles/colors';

const CustomTextInput = ({icon, ...res}) => {
  return (
    <View style={styles.customTextInput}>
      <FontAwesome5
        name={icon}
        style={styles.icon}
        size={ms(16)}
        color="white"
      />
      <TextInput {...res} style={styles.input} />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  customTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: ms(1),
    borderColor: '#00CBFF',
    backgroundColor: '#00CBFF',
  },
  input: {
    fontSize: 12,
    paddingVertical: 0,
    paddingHorizontal: ms(8),
    backgroundColor: 'white',
    flex: 1,
  },
  icon: {
    paddingHorizontal: ms(8),
    width: ms(32),
  },
});
