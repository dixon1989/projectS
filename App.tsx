import React, { Component } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Navigator from "./navigation/Navigator";

export default class App extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  main: {
    width: "100%",
    height: "100%",
    position: "absolute"
  }
});
