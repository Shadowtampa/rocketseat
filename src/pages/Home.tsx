import React, {
  useState,
  useEffect
} from 'react';

import {
  SafeAreaView,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}
 
export const Home = () => {

  let header = "Welcome, Luis!"
  let listTitle = "My Skills" 

  const [skill, setSkill] = useState('');
  const [skillList, setSkillList] = useState<SkillData[]>([]);
  const [greetinsMessage, setGreetinsMessage] = useState("Hello There!");


  function handleAddSkill() {

    const data = {
      id: String(new Date().getTime()),
      name: skill,
    }

    setSkillList(oldState => [...oldState, data])
  }

  function handleDeleteSkill(id: string){
    setSkillList(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(() => {
    let currentHour = new Date().getHours() - 3;

    if (currentHour < 0) {
      currentHour += 24;
    }

    let message = "Good Morning! 🌅";

    if (currentHour > 12) {
      message = "Good evening! ☀️";
    }
    if (currentHour > 18) {
      message = "Good Night! 🌃";
    }

    setGreetinsMessage(message);
  }, []);

  return (
    <>

      <SafeAreaView
        style={styles.container}
      >

        
        <Text
          style={styles.header}
        >{header}
        </Text>

        <Text
          style={styles.listSubTitle}
        >{greetinsMessage} </Text>

        <TextInput
          style={styles.input}
          placeholder="Add Skill"
          placeholderTextColor="#6d6d6d"
          onChangeText={setSkill}
        />

        <Button title="New Skill" onPress={handleAddSkill} />

        <Text
          style={styles.listTitle}
        >{listTitle}: {skillList.length}</Text>

        <FlatList
          data={skillList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (

            <SkillCard title={item.name} 
            onPress={() => handleDeleteSkill(item.id)} />
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

  listTitle: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,

  },
  listSubTitle: {
    color: '#FFF',
    fontSize: 15,
    marginTop: 3,
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