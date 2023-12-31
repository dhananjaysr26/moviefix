import React, {useCallback} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

import MovieCard from '../components/MovieCard';
import {useGetMovies} from '../services/useMovies';
import Header from '../components/Header';

const HomeScreen = () => {
  const {isError, error, isLoading, data, setYear, year} = useGetMovies();

  const renderMovie = useCallback(
    ({item}: any) => <MovieCard movie={item} key={item.id} />,
    [],
  );
  console.log('Start>>>>>>>>>>>>>');
  console.log({isError, error, isLoading, data});

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.result}>
        {data?.total_results} Found | Page :{data?.page} | Year :{year}
      </Text>
      <ScrollView contentContainerStyle={styles.movieContainer}>
        <Text />
        {data?.results && (
          <FlatList
            data={data?.results}
            renderItem={renderMovie}
            numColumns={2}
            keyExtractor={item => item.id.toString()}
            columnWrapperStyle={styles.column}
            onEndReached={() => {
              console.log('End Reached');
              setYear(2014);
            }}
            onEndReachedThreshold={0.1}
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
  result: {
    color: 'gray',
    paddingLeft: 20,
    marginTop: 5,
  },
});
