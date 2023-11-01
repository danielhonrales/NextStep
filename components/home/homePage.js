import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../colors";
import { ChatButton } from "../groupChat/ChatButton";

export function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.timelineContainers}>
        <Text style={styles.title}>Current Timelines</Text>
        <View style={styles.currentTimelinecontainer}>
          <Text style={styles.textSection}>Getting first house</Text>
          <Text style={styles.textSection}>Filler Timeline</Text>
        </View>
      </View>

      <View style={styles.timelineContainers}>
        <Text style={styles.title}>Past Timelines</Text>
        <View style={styles.pastTimelinecontainer}>
          <Text style={styles.textSection}>Filler Timeline</Text>
          <Text style={styles.textSection}>Filler Timeline</Text>
        </View>
      </View>

      <View style={styles.chatButton}>
        <ChatButton navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.background,
  },
  currentTimelinecontainer: {
    flex: 1,
    flexDirection: "row",
    width: 300,
    height: 250,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "black",
    alignItems: "center",
  },
  pastTimelinecontainer: {
    flex: 1,
    flexDirection: "row",
    width: 300,
    height: 250,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "black",
    alignItems: "center",
  },
  timelineContainers: {
    flex: 1,
    alignItems: "center",
    margin: 25,
  },
  textSection: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 6,
    margin: 23,
    textAlign: "center",
    paddingTop: 33,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  chatButton: {
    alignSelf: 'flex-end',
    margin: 10
  }
});