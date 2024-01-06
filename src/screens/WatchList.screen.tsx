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
import {colors} from '../utils/colors';

const WatchListScreen = () => {
  const [wishListData, setWishListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const [refresh, setRefresh] = useState(0);

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
  }, [isFocused, refresh]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!loading && wishListData.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Watch List is Empty!</Text>
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
          renderItem={item => (
            <MovieCard
              item={item.item}
              isLikeCallBack={() => setRefresh(pre => pre + 1)}
            />
          )}
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
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.containerBg,
  },
  column: {
    marginBottom: 20,
    justifyContent: 'space-between',
    gap: 10,
  },
});
