import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const MovieCard = ({movie}: any) => {
  const {title, poster_path, overview, release_date} = movie;
  console.log({title, poster_path, overview, release_date});

  return (
    <View style={styles.card}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}
        style={styles.poster}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.releaseDate}>Release Date: {release_date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  poster: {
    width: 120,
    height: 180,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  releaseDate: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  overview: {
    fontSize: 14,
  },
});

export default MovieCard;
