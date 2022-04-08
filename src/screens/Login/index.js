import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {headerBackgroundLogin} from '../../assets';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {FormLogin, ImageDefault} from '../../components';
import {useSelector} from 'react-redux';
import Loading from '../Loading';

const Login = ({navigation}) => {
  const {loading} = useSelector(state => state.globalReducer);

  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView contentContainerStyle={styles.login}>
      <View style={styles.top}>
        <ImageDefault source={headerBackgroundLogin} />
      </View>
      <View style={styles.bottom}>
        <FormLogin navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
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
