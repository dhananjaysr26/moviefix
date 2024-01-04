import {useEffect, useRef} from 'react';
import {Animated, Easing, StyleProp, StyleSheet, ViewStyle} from 'react-native';

const Loader = (props: {
  width: string | number;
  height: string | number;
  style?: StyleProp<ViewStyle>;
}) => {
  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const sharedAnimationConfig = {
      duration: 1000,
      useNativeDriver: true,
    };
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          ...sharedAnimationConfig,
          toValue: 1,
          easing: Easing.out(Easing.ease),
        }),
        Animated.timing(pulseAnim, {
          ...sharedAnimationConfig,
          toValue: 0,
          easing: Easing.in(Easing.ease),
        }),
      ]),
    ).start();

    return () => {
      // cleanup
      pulseAnim.stopAnimation();
    };
  }, []);

  const opacityAnim = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.05, 0.15],
  });

  return (
    <Animated.View
      style={[
        styles.loading,
        {width: props.width, height: props.height},
        {opacity: opacityAnim},
        props.style,
      ]}
    />
  );
};

export default Loader;

const styles = StyleSheet.create({
  loading: {},
});
