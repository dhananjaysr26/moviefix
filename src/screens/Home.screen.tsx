import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {getMovies} from '../services/movies.services';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';

const HomeScreen = () => {
  const [moviesData, setMoviesData] = useState<any>(null);

  const renderMovie = useCallback(
    ({item}: any) => <MovieCard movie={item} key={item.id} />,
    [],
  );

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
      <ScrollView contentContainerStyle={styles.movieContainer}>
        {moviesData?.results && (
          <FlatList
            data={moviesData?.results}
            renderItem={renderMovie}
            numColumns={2}
            keyExtractor={item => item.id.toString()}
            columnWrapperStyle={styles.column}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movieContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  column: {
    marginBottom: 20,
    justifyContent: 'space-between',
    gap: 10,
  },
});
