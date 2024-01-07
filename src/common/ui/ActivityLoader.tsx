import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {colors} from '../../utils/colors';

const ActivityLoader = () => {
  return (
    <View style={{backgroundColor: colors.containerBg}}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default ActivityLoader;
