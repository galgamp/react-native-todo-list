import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = ({ text }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    backgroundColor: "#fff",
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  square: {
    backgroundColor: "#8C82FF",
    height: 30,
    width: 30,
    marginLeft: 10,
    borderRadius: 10,
  },
  itemText: {
    marginLeft: 10,
    maxWidth: "80%",
  },
  circular: {
    borderColor: "#2F69FF",
    borderWidth: 2,
    height: 10,
    width: 10,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default Task;
