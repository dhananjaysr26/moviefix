import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Filter from './Filter';
import {useGetMoviesGenres} from '../services/useMovies';

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const {data, isLoading} = useGetMoviesGenres();
  console.log('Header');
  console.log({data});
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Text style={styles.text}>MOVIEFIX</Text>
      </View>
      {!isLoading && <Filter genres={data?.genres} />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: '#242424',
    height: 120,
    paddingTop: 20,
    paddingBottom: 20,
  },
  header: {
    paddingLeft: 20,
    paddingBottom: 10,
  },
  text: {
    color: '#f0283c',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
