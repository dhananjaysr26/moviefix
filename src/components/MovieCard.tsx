import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const MovieCard = ({movie}: any) => {
  const {poster_path, title} = movie;
  // console.log({title, poster_path, overview, release_date});

  return (
    <View style={styles.card}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}
        style={styles.poster}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        {/* <Text style={styles.releaseDate}>Release Date: {release_date}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flex: 1,
    position: 'relative',
  },
  poster: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    padding: 6,
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    bottom: 0,
    borderRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
    width: '100%',
  },
  releaseDate: {
    fontStyle: 'italic',
    marginBottom: 5,
    color: 'gray',
  },
  overview: {
    fontSize: 14,
  },
});

export default MovieCard;
