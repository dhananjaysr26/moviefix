import React from 'react';
import {StyleSheet, View} from 'react-native';
import Loader from '../common/Loader';
import {colors} from '../utils/colors';

const FilterSkeletonLoader = () => {
  return (
    <View style={styles.container}>
      <Loader
        key={'first'}
        width={'100%'}
        height={30}
        style={[styles.filterItem, styles.firstList]}
      />
      {Array.from({length: 5}).map((_, index) => (
        <Loader
          key={index}
          width={'100%'}
          height={30}
          style={styles.filterItem}
        />
      ))}
    </View>
  );
};

export default FilterSkeletonLoader;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  filterItem: {
    width: '20%',
    backgroundColor: colors.skeletonText,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  firstList: {
    marginLeft: 20,
  },
});
