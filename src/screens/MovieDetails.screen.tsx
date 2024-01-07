import React, {useEffect, useState} from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import {formatDate} from '../utils/helper/date';
import {getOttProviders} from '../services/movies.services';
import OttProvider from '../components/OTTProvider';

const MovieDetailsScreen = ({route}: any) => {
  const {item: movie} = route.params;
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchOttProviders = async () => {
      try {
        const res = await getOttProviders(movie.id);
        setProviders(res);
      } catch (err) {
        console.log(err);
      }
    };
    if (movie?.id) {
      fetchOttProviders();
    }
  }, [movie]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.backdropContainer}>
          <Image
            style={styles.backdropImage}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
            }}
            resizeMode="cover"
          />
          <View style={styles.header}>
            <Image
              style={styles.poster}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.date}>{formatDate(movie.release_date)}</Text>
            <Text style={styles.rating}>
              ⭐ {movie.vote_average + '/' + 10}
            </Text>
          </View>
        </View>
        <View style={styles.overview}>
          <Text style={styles.overviewTitle}>Overview</Text>
          <Text style={styles.overviewText}>{movie.overview}</Text>
        </View>
        <View style={styles.ott}>
          <Text style={styles.available}>Available On:</Text>
          {providers?.map((provider: any) => (
            <OttProvider key={provider.provider_id} provider={provider} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.containerBg,
    height: '100%',
  },
  backdropContainer: {
    position: 'relative',
  },
  backdropImage: {
    width: '100%',
    height: 250,
  },
  headerAbsolute: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    paddingHorizontal: 20,
  },
  header: {
    position: 'absolute',
    bottom: -50,
    left: 10,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  headerContent: {
    justifyContent: 'center',
    width: '100%',
    color: 'white',
    padding: 5,
    paddingEnd: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    bottom: 0,
    marginLeft: '38%',
    paddingVertical: 15,
    borderTopLeftRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  rating: {
    fontSize: 14,
    color: 'white',
    paddingVertical: 5,
  },
  date: {
    fontSize: 14,
  },
  overview: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 70,
  },
  overviewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  overviewText: {
    fontSize: 16,
  },
  ott: {
    flex: 1,
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  available: {color: 'white', fontWeight: 'bold'},
});

export default MovieDetailsScreen;
