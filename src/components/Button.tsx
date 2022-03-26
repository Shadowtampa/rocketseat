import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
  title : string;
};

export function Button({ title, ...allProps } : ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      {...allProps}
    >
      <Text
        style={styles.buttonText}
      >{title}</Text>
    </TouchableOpacity>
  )
} 

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6a1b9a',
    padding: 15,
    borderRadius: 7,
    marginTop: 20,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});