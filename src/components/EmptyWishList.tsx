import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import {colors} from '../utils/colors';
import LottieView from 'lottie-react-native';

const EmptyWishList = () => {
  const animationRef = useRef<any>(null);
  const isFocused = useIsFocused();

  const emptyTextAnimation = useRef(new Animated.Value(0)).current;

  const slideInAnimation = {
    transform: [
      {
        translateY: emptyTextAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [200, 0],
        }),
      },
    ],
  };

  useEffect(() => {
    Animated.timing(emptyTextAnimation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [isFocused]);

  useEffect(() => {
    animationRef.current?.play();
    animationRef.current?.play(30, 120);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={require('../assets/emptyWishList.json')}
        style={{width: 300, height: 300}}
      />
      <Animated.Text style={[styles.emptyText, slideInAnimation]}>
        Watch List is Empty!
      </Animated.Text>
    </View>
  );
};

export default EmptyWishList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.containerBg,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
});
