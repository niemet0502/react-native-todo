import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}></View>
      <TouchableOpacity style={styles.square}></TouchableOpacity>
      <Text style={styles.itemText}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item:{
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },
  itemLeft:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4
  },
  itemText:{

  }
});

export default Task;