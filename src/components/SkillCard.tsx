import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps{
  title: string
}

export const SkillCard = ({title, ...allProps} : SkillCardProps) => {
  return (
    <TouchableOpacity
      style={styles.skill}
      {...allProps}
    >
      <Text
        style={styles.skillTitle}
      >
        {title}
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