import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, TextStyle } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  style?: TextStyle;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, style, onPress, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
