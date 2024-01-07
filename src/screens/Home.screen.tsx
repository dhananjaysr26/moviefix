import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {useGetMovies} from '../services/useMovies';
import Header from '../components/Header';
import MovieSectionList from '../components/MovieSection';
import SkeletonLoader from '../components/SkeletonLoader';
import {useGenreContext} from '../../provider/MoviesProvider';
import {queryClient} from '../../App';
import ActivityLoader from '../common/ui/ActivityLoader';

const HomeScreen = () => {
  const {selectedGenre} = useGenreContext();
  const {
    data,
    hasNextPage,
    fetchNextPage,
    hasPreviousPage,
    fetchPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    isFetching,
    queryKey,
  } = useGetMovies(selectedGenre);

  const handlePageChange = useCallback(
    (direction: 'previous' | 'next') => {
      if (isFetching) {
        return;
      }
      if (direction === 'previous' && hasPreviousPage) {
        fetchPreviousPage();
      } else if (direction === 'next' && hasNextPage) {
        fetchNextPage();
      }
    },
    [
      hasPreviousPage,
      isFetching,
      hasNextPage,
      fetchPreviousPage,
      fetchNextPage,
    ],
  );
  const onRefresh = () => {
    queryClient.invalidateQueries({queryKey});
  };

  return (
    <View style={styles.container}>
      <Header />
      {isFetchingPreviousPage && <ActivityLoader />}
      {data?.pages ? (
        <MovieSectionList
          data={data.pages}
          handlePageChange={handlePageChange}
          onRefresh={onRefresh}
        />
      ) : (
        <SkeletonLoader />
      )}
      {isFetchingNextPage && <ActivityLoader />}
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
