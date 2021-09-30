import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')
  const counter = 0

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Поле не может быть пустым')
    }
  }

  return (
    <View>
      <View style={styles.block}>
        <TextInput
          style={styles.input}
          onChangeText={setValue}
          value={value}
          placeholder="Введите текст..."
          autoCorrect={false}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#E05D5D"
          backgroundColor="#E05D5D"
          title="Добавить"
          onPress={pressHandler}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
    width: '100%',
  },
  input: {
    width: '100%',
    borderStyle: 'solid',
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  button: {
    width: '100%',
    marginBottom: 10,
  },
})
