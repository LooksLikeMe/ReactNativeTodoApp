import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, onRemove}) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('Pressed', todo.id)}
      onLongPress={() => onRemove(todo.id)}
    >
      <View style={styles.todo}>
        <Text style={styles.title}>{todo.title}</Text>
        <Text style={styles.date}>{new Date().toTimeString().slice(0, 5)}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 5,
    justifyContent: 'space-between',
    maxHeight: '100%',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  date: {
      fontSize: 10,
      justifyContent: 'flex-end'
  }
})
