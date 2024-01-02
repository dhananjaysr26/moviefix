import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

import {useGetMovies} from '../services/useMovies';
import Header from '../components/Header';
import MovieSectionList from '../components/MovieSection';

const HomeScreen = () => {
  const {data, hasNextPage, fetchNextPage, hasPreviousPage, fetchPreviousPage} =
    useGetMovies();

  const handlePageChange = useCallback(
    (direction: 'previous' | 'next') => {
      if (direction === 'previous' && hasPreviousPage) {
        fetchPreviousPage();
      } else if (direction === 'next' && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchPreviousPage, fetchNextPage, hasPreviousPage, hasNextPage],
  );

  return (
    <View style={styles.container}>
      <Header />
      {/* <View style={styles.buttons}>
        <AppButton onPress={() => handlePageChange('previous')} title="<" />
        <AppButton onPress={() => handlePageChange('next')} title=">" />
      </View> */}
      {data?.pages && (
        <MovieSectionList
          data={data.pages}
          handlePageChange={handlePageChange}
        />
      )}
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
});
