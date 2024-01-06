import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '../common/Loader';
import {colors} from '../utils/colors';

const SkeletonLoader = () => {
  const skeletonData = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}];

  const renderSkeletonCard = () => (
    <View style={styles.skeletonCard}>
      <Loader width={'100%'} height={196} style={styles.poster} />
      <View style={styles.likeButton}>
        <Icon name="heart" color={'#eecece'} size={24} />
      </View>
      <View style={styles.details}>
        <Loader width={'100%'} height={20} style={styles.titleText} />
        <Loader width={'40%'} height={20} style={styles.starText} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={skeletonData}
      renderItem={renderSkeletonCard}
      keyExtractor={item => item.key}
      contentContainerStyle={styles.container}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    width: '100%',
    flex: 1,
    gap: 10,
    justifyContent: 'space-between',
    backgroundColor: '#504A4B',
  },
  skeletonCard: {
    backgroundColor: colors.skeletonColor,
    height: 250,
    flex: 1,
    borderRadius: 10,
    marginLeft: 12,
    marginRight: 12,
    position: 'relative',
  },
  details: {
    flex: 1,
    padding: 6,
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    bottom: 0,
    borderRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    gap: 2,
  },
  titleText: {
    flex: 1,
    backgroundColor: colors.skeletonText,
  },
  starText: {
    width: '40%',
    backgroundColor: colors.skeletonText,
  },
  likeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  poster: {
    backgroundColor: colors.skeletonColor,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default SkeletonLoader;
