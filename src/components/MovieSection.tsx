import React, {useRef, useState} from 'react';
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
  onRefresh: Function;
}

const MovieSectionList: React.FC<Props> = ({
  data,
  handlePageChange,
  onRefresh,
}) => {
  const [enableStartFetch, setEnableStartFetch] = useState(false);

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: any}) => {
      // console.log({viewableItems});
      const indices = viewableItems.map((item: any) => item.index);
      const largestIndex = Math.max(...indices);
      if (!enableStartFetch && largestIndex >= 4) {
        setEnableStartFetch(true);
      }
    },
  ).current;

  const renderSectionHeader = (props: any) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.headerText}>{props?.section?.title}</Text>
      </View>
    );
  };

  const EmptyCard = () => {
    return (
      <View style={{flex: 1}}>
        <Text style={{color: 'while'}}>Movies Not Available</Text>
      </View>
    );
  };

  const sections: any = data.map(item => ({
    title: item.year?.toString() || 'WishList',
    data: item.movies?.results?.map(movie => ({
      ...movie,
      key: movie.id.toString(),
    })),
  }));
  console.log('===========>', enableStartFetch);
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.id?.toString() + index}
      renderItem={({item, index, section}) => (
        <RenderTwoColumn item={item} index={index} section={section} />
      )}
      renderSectionHeader={renderSectionHeader}
      contentContainerStyle={styles.movieContainer}
      onEndReached={() => {
        // console.log(
        //   'End Reached!',
        //   new Date().getFullYear() + 1,
        //   data[data.length - 1].year,
        // );

        if (data[data.length - 1].year < new Date().getFullYear() + 1) {
          handlePageChange('next');
        }
      }}
      onStartReached={() => {
        console.log('Start Reached!', {
          length: data.length,
          enableStartFetch,
        });
        if (enableStartFetch) {
          handlePageChange('previous');
          setEnableStartFetch(false);
        }
      }}
      ListEmptyComponent={EmptyCard}
      //   TODO:Reset Function
      onRefresh={() => onRefresh()}
      progressViewOffset={100}
      refreshing={false}
      onEndReachedThreshold={0.5}
      onStartReachedThreshold={1}
      onViewableItemsChanged={onViewableItemsChanged}
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
