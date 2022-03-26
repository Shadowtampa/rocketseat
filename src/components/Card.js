import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export const Card = ({skill}) => {
  return (
    <TouchableOpacity
      key={skill}
      style={styles.skill}
    >
      <Text
        style={styles.skillTitle}
      >
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  skill: {
    backgroundColor: '#333333',
    padding: 12,
    borderRadius: 100,
    marginTop: 10,
    alignItems: 'center'
  },

  skillTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20
  }
});