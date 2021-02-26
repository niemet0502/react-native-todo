import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'
export default function App() {
  return (
    <View style={styles.container}>


      <View style={styles.tasksWrapper}>

      <Text style={styles.sectionTitle}>
          Today's task
      </Text>

        <View style={styles.items}>
          <Task text='task 1'/>   
          <Task text='task 2'/> 
          <Task text='task 3'/> 
          <Task text='task 4'/> 
          <Task text='task 5'/> 
          <Task text='task 6'/> 
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  },
  items:{}
});
