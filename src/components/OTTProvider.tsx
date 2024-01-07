import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const OttProvider = ({provider}: any) => {
  return (
    <View>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${provider.logo_path}`,
        }}
        style={styles.icon}
      />
    </View>
  );
};

export default OttProvider;

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  },
});
