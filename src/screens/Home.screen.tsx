import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getMovies} from '../services/movies.services';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';

const HomeScreen = () => {
  const [moviesData, setMoviesData] = useState<any>(null);

  const renderItem = useCallback(({item}: any) => {
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
      <Header />
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
    height: 'auto',
  },
  movieContainer: {
    flex: 1,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    justifyContent: 'center',
  },
});
