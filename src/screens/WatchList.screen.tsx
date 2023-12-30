import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WatchListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Watch List Screen</Text>
    </View>
  );
};

export default WatchListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
});
