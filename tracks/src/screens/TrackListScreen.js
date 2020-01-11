import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const TaskListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>Task List Screen</Text>
      <Button
        title="Go to track detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TaskListScreen;
