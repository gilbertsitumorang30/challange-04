import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {getRegister} from '../../../screens/Register/redux/action';
import {CustomButton, CustomTextInput, Gap} from '../../atoms';

const FormRegister = ({navigation}) => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userRegister = () => {
    dispatch(getRegister(fullName, email, password));
  };

  return (
    <View style={styles.formRegister}>
      <CustomTextInput
        icon="user-alt"
        placeholder="Full Name"
        onChangeText={text => setFullName(text)}
      />
      <Gap height={ms(12)} />
      <CustomTextInput
        icon="envelope"
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <Gap height={ms(12)} />
      <CustomTextInput
        icon="lock"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <Gap height={ms(24)} />
      <CustomButton onPress={() => userRegister()} title="REGISTER" />
      <Gap height={ms(40)} />
      <Text style={styles.topText}>Already have an Account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.bottomText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormRegister;

const styles = StyleSheet.create({
  formRegister: {
    width: '80%',
  },
  topText: {
    fontSize: ms(11),
    color: 'gray',
    textAlign: 'center',
  },
  bottomText: {
    fontSize: ms(11),
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
