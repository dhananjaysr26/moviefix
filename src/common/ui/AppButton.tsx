import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
  buttonWidth?: Dimensions;
  backgroundColor?: string;
  disabledBgColor?: string;
  disabled?: boolean;
  borderWidth?: number | false;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  disabled = false,
  borderWidth = false,
}) => {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      width: '25%',
      marginVertical: 10,
      backgroundColor: 'gray',
      borderWidth: borderWidth !== false ? borderWidth : 0,
    },
    text: {
      color: 'blue',
      fontSize: 15,
      // letterSpacing: 1,
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
  });

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
