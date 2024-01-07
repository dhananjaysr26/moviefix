import LottieView from 'lottie-react-native';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';

const SplashScreen = () => {
  const animationRef = useRef<any>(null);

  useEffect(() => {
    animationRef.current?.play();
    animationRef.current?.play(30, 120);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={require('../assets/splash.json')}
        style={{width: 300, height: 300}}
        loop={false}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
