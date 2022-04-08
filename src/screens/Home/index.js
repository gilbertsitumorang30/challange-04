import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {getBookList, setLogout} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../Loading';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {listBooks} = useSelector(state => state.homeReducer);
  const {loading} = useSelector(state => state.globalReducer);

  useEffect(() => {
    dispatch(getBookList());
  }, []);

  if (loading) {
    return <Loading />;
  }
  console.log('list books :', listBooks);
  return (
    <SafeAreaView style={styles.home}>
      <FlatList
        data={listBooks}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', {
                bookId: item.id,
              })
            }>
            <Text>{item.id}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(setLogout(null));
          navigation.navigate('Login');
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
});
