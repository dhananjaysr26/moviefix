import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getWatchListFromStorage} from '../lib/localStorage';
import MovieCard from '../components/MovieCard';
import {useIsFocused} from '@react-navigation/native';

const WatchListScreen = () => {
  const [wishListData, setWishListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchWishListData = async () => {
      try {
        const watchList = await getWatchListFromStorage();
        setWishListData(watchList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching wish list data:', error);
      }
    };

    fetchWishListData();
  }, [isFocused]);

  // console.log('Hello');

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text />
      {wishListData.length > 0 && (
        <FlatList
          data={wishListData}
          keyExtractor={(item: any) => item.key}
          renderItem={item => <MovieCard item={item.item} />}
          numColumns={2}
          columnWrapperStyle={styles.column}
        />
      )}
    </ScrollView>
  );
};

export default WatchListScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  column: {
    marginBottom: 20,
    justifyContent: 'space-between',
    gap: 10,
  },
});
