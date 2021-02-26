import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a Task'} />

        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}></Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  items:{},
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, 
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    width: 250,
    borderWidth: 1
  }
});
