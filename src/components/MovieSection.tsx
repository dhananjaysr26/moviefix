import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import MovieCard from './MovieCard';

interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface MovieData {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface Props {
  data: {year: number; movies: MovieData}[];
  handlePageChange: (direction: 'previous' | 'next') => void;
}

const MovieSectionList: React.FC<Props> = ({data, handlePageChange}) => {
  const renderSectionHeader = (props: any) => {
    return (
      <View style={{backgroundColor: 'gray'}}>
        <Text style={styles.headerText}>{props?.section?.title}</Text>
      </View>
    );
  };

  const EmptyCard = () => {
    return (
      <View>
        <Text>Empty Card!</Text>
      </View>
    );
  };

  const sections: any = data.map(item => ({
    title: item.year.toString(),
    data: item.movies?.results?.map(movie => ({
      ...movie,
      key: movie.id.toString(),
    })),
  }));

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.id.toString() + index}
      renderItem={MovieCard}
      renderSectionHeader={renderSectionHeader}
      contentContainerStyle={styles.movieContainer}
      onEndReached={() => {
        console.log('End Reached!');
        handlePageChange('next');
      }}
      onStartReached={() => {
        console.log('Start Reached!');
        handlePageChange('previous');
      }}
      initialNumToRender={20}
      ListEmptyComponent={EmptyCard}
      //   TODO:Reset Function
      onRefresh={() => console.log('Refresh')}
      progressViewOffset={100}
      refreshing={false}
      stickySectionHeadersEnabled
    />
  );
};

export default MovieSectionList;

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  headerText: {
    color: 'red',
  },
  movieContainer: {
    marginBottom: 20,
    justifyContent: 'space-between',
    gap: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
