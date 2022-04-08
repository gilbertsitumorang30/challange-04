import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#00CBFF" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
