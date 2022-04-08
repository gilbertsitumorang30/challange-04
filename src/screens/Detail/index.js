import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailBook} from '../Home/redux/action';
import Loading from '../Loading';

const Detail = ({route}) => {
  const dispatch = useDispatch();
  const {bookId} = route.params;

  const {loading} = useSelector(state => state.globalReducer);
  const {detailBook} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getDetailBook(bookId));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View>
      <Text>{detailBook.title}</Text>
      <Text>{detailBook.author}</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
