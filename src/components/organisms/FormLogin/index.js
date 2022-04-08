import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../screens/Login/redux/action';
import {CustomButton, CustomTextInput, Gap} from '../../atoms';

const FormLogin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const userLogin = () => {
    dispatch(setUser(email, password));
  };

  return (
    <View style={styles.formLogin}>
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
      <CustomButton title="LOGIN" onPress={() => userLogin()} />
      <Gap height={ms(40)} />
      <Text style={styles.topText}>Dont have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.bottomText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  formLogin: {
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
