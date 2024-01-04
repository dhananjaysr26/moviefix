import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import RenderTwoColumn from './RenderTwoColumn';

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
      <View style={styles.sectionHeader}>
        <Text style={styles.headerText}>{props?.section?.title}</Text>
      </View>
    );
  };

  const EmptyCard = () => {
    return (
      <View>
        <Text>Movies Not Available</Text>
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
      renderItem={({item, index, section}) => (
        <RenderTwoColumn item={item} index={index} section={section} />
      )}
      renderSectionHeader={renderSectionHeader}
      contentContainerStyle={styles.movieContainer}
      onEndReached={() => {
        console.log('End Reached!');
        handlePageChange('next');
      }}
      onStartReached={() => {
        console.log('Start Reached!');
        // handlePageChange('previous');
      }}
      ListEmptyComponent={EmptyCard}
      //   TODO:Reset Function
      onRefresh={() => console.log('Refresh')}
      progressViewOffset={100}
      refreshing={false}
      onEndReachedThreshold={0.5}
    />
  );
};

export default MovieSectionList;

const styles = StyleSheet.create({
  movieContainer: {
    justifyContent: 'space-between',
    gap: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#504A4B',
  },
  sectionHeader: {
    paddingBottom: 5,
    paddingTop: 10,
  },
  text: {
    color: 'black',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
