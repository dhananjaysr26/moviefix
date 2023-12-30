import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Filter from './Filter';

const Header = () => {
  const genres = ['All', 'Action', 'Horror', 'Comedy', 'Drama', 'Sci-Fi'];

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Text style={styles.text}>MOVIEFIX</Text>
      </View>
      <Filter genres={genres} />
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
