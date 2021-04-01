import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo today</Text>
      <View style={styles.tasksSection}>
        <Task text={"💪 Work out 30 minutes"}></Task>
        <Task text={"🏡 Ace the react native test"}></Task>
        <Task text={"🍹 Chill out"}></Task>
      </View>
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
});
