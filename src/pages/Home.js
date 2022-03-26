import React, { useState } from 'react';

import {
  SafeAreaView,
  Text,
  TextInput,
  FlatList,
  StyleSheet
} from 'react-native';

import { Button } from '../components/Button';
import { Card } from '../components/Card';

export function Home() {

  let header = "Welcome, Luis!"
  let listTitle = "My Skills"

  const [skill, setSkill] = useState('');
  const [skillList, setSkillList] = useState([]);


  function handleAddSkill() {
    setSkillList(oldState => [...oldState, skill])
  }


  return (
    <>
      <SafeAreaView
        style={styles.container}
      >

        <Text
          style={styles.header}
        >{header}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Add Skill"
          placeholderTextColor={styles.inputTextColor}
          onChangeText={setSkill}
        />

        <Button onPress={handleAddSkill} />

        <Text
          style={styles.listTitle}
        >{listTitle}</Text>
        <FlatList
          data={skillList}
          keyExtractor={item => item}
          renderItem={({ item }) => (

            <Card skill={item} />
          )}
        />

      </SafeAreaView>
    </>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    paddingVertical: 30,
    paddingHorizontal: 15,

  },

  header: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#424242',
    fontSize: 18,
    borderRadius: 7,
    padding: 10,
    marginTop: 30,
    color: '#FFF',
    fontWeight: 'bold',
  },

  inputTextColor: "#6d6d6d",

  listTitle: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,

  },

  skill: {
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 100,
    marginTop: 10,
    alignItems: 'center'
  },

  skillTitle: {
    color: '#FFF',
    fontWeight: 'bold',
  }
});