import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Task from './components/Task';

export default function App() {
  const [tasks, setTasks] = useState([
    { text: "💪 Work out 30 minutes" },
    { text: "🏡 Ace the react native test" },
    { text: "🍹 Chill out" },
  ]);
  const [value, setValue] = useState("");

  const addTask = () => {
    setTasks([...tasks, { text: value }]);
    setValue("");
    Keyboard.dismiss();
  };

  const spliceTask = (currentTask) => {
    setTasks(tasks.filter((task) => task.text != currentTask.text));
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Text style={styles.title}>Todo today</Text>
        <View style={styles.tasksSection}>
          {tasks.map((task, i) => (
            <TouchableOpacity onPress={() => spliceTask(task)}>
              <Task key={i} text={task.text}></Task>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.addTask}>
          <TextInput
            style={styles.input}
            placeholder="add a task"
            value={value}
            onChangeText={(text) => setValue(text)}
          ></TextInput>
          <TouchableOpacity onPress={() => addTask()}>
            <View style={styles.buttonAdd}>
              <Text style={styles.textAdd}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8C82FF",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 100,
    paddingLeft: 20,
  },
  tasksSection: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  addTask: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 30,
    textAlign: "center",
  },
  buttonAdd: {
    backgroundColor: "#fff",
    height: 40,
    width: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textAdd: {
    color: "#2f69ff",
    fontSize: 30,
  },
});
