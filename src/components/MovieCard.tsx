import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  addOrRemoveFromList,
  getWatchListFromStorage,
} from '../lib/localStorage';
import {useIsFocused} from '@react-navigation/native';

const {width} = Dimensions.get('window');

interface MovieCardProps {
  item: any;
  isLikeCallBack?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({item, isLikeCallBack}) => {
  const [isLiked, setIsLiked] = useState(false);
  const isFocused = useIsFocused();

  const checkLikedStatus = useCallback(async () => {
    try {
      const watchList = await getWatchListFromStorage();
      // console.log({watchList});
      // console.log('===>', item.key);
      if (watchList) {
        const isItemLiked = watchList.some(
          (movie: any) => item.key === movie.key,
        );

        // console.log({item: item.key, isItemLiked});
        setIsLiked(isItemLiked);
      }
    } catch (error) {
      console.error('Error checking liked status:', error);
    }
  }, [item]);

  useEffect(() => {
    const checkWatchList = async () => {
      // console.log('RUN');
      await checkLikedStatus();
    };
    checkWatchList();
  }, [isFocused]);

  const AddOrRemoveWatchList = async () => {
    try {
      await addOrRemoveFromList(item);
    } catch (error) {
      console.log(error);
    } finally {
      if (isLikeCallBack) {
        isLikeCallBack();
      }
    }
    setIsLiked(prev => !prev);
  };

  return (
    <TouchableOpacity>
      <View style={[styles.card, {width: width / 2 - 16}]}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
          style={styles.poster}
        />
        {/* Liked Button */}
        <View style={styles.likeButton}>
          <TouchableOpacity onPress={AddOrRemoveWatchList}>
            <Icon
              name="heart"
              color={isLiked ? '#f0283c' : '#e6e9ed'}
              size={24}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.details}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text}>⭐ {item.vote_average + '/' + 10}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
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
    gap: 2,
  },
  text: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    padding: 1,
  },
  likeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});
export default MovieCard;
