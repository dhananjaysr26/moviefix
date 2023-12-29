import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getMovies} from '../services/movies.services';
import MovieCard from '../components/MovieCard';

const HomeScreen = () => {
  const [moviesData, setMoviesData] = useState<any>(null);

  const renderItem = useCallback(({item}: any) => {
    console.log(item);
    return (
      <View key={item.id} style={styles.movieContainer}>
        <MovieCard movie={item} />
      </View>
    );
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const res: any = await getMovies();
      console.log({res});
      setMoviesData(res?.data);
    };
    fetchMovies();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      {moviesData?.results && (
        <FlatList data={moviesData?.results} renderItem={renderItem} />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  movieContainer: {
    flex: 1,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },
});
