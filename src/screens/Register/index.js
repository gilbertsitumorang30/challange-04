import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {headerBackgroundLogin} from '../../assets';
import {FormRegister, ImageDefault} from '../../components';
import Loading from '../Loading';

const Register = ({navigation}) => {
  const {loading} = useSelector(state => state.globalReducer);

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.register}>
      <View style={styles.top}>
        <ImageDefault source={headerBackgroundLogin} />
      </View>
      <View style={styles.bottom}>
        <FormRegister navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  register: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  top: {
    height: hp('30%'),
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
