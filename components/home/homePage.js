import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { COLORS } from "../colors";
import { ChatButton } from "../groupChat/ChatButton";
import { TimelineButton } from "./TimelineButton";
import { STATUS } from "../Status";
import { FONTS } from "../fonts";

export function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.timelineContainers}>
        <Text style={styles.title}>Current Timelines</Text>
        <View style={styles.currentTimelinecontainer}>
          <TimelineButton 
          navigation={navigation} 
          name="House Hunting"
          status={STATUS.in_progress}
          />
          <Text style={styles.textSection}>Getting first house</Text>
          <Text style={styles.textSection}>Filler Timeline</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.createTimelineButton}
        onPress={() => navigation.navigate('TimelineCreationPage')}
        >
        <Text style={styles.createTimeline}>Create Timeline</Text>
      </TouchableOpacity>

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
  },
  createTimelineButton: {
    width: 75,
    height: 30,
    borderRadius: 20,
    alignContent: 'center',
    alignSelf: 'center'
  },
  createTimeline: {
    width: 150,
    height: 30,
    borderRadius: 20,
    fontSize: FONTS.fontSize,
    color: COLORS.white,
    backgroundColor: COLORS.highlight,
    textAlign: "center",
    textAlignVertical: 'center'
  }
});
