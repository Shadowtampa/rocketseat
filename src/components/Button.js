import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';


export function Button({onPress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text
        style={styles.buttonText}
      >Add</Text>
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