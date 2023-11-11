import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { COLORS } from "../colors";
import { ChatButton } from "../groupChat/ChatButton";
import { TimelineButton } from "./TimelineButton";
import { CurrentTimeline } from "./currentTimeline";
import { PastTimeline } from "./pastTimeline";
import { STATUS } from "../Status";
import { FONTS } from "../fonts";

export function HomePage({ navigation }) {
  const [selectedGoal, setSelectedGoal] = useState(null);

  // Displays the designated timelines
  const displayGoals = () => {
    if (selectedGoal === "current") {
      return <CurrentTimeline />;
    } else if (selectedGoal === "past") {
      return <PastTimeline />;
    } else {
      return <CurrentTimeline />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={styles.navBarButtons}
          onPress={() => setSelectedGoal("current")}
        >
          <Text style={styles.buttonText}>Current Timelines</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navBarButtons}
          onPress={() => setSelectedGoal("past")}
        >
          <Text style={styles.buttonText}>Past Timelines</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createTimelineButton}
          onPress={() => navigation.navigate("TimelineCreationPage")}
        >
          <Text style={styles.createTimelineText}>Create Timeline</Text>
        </TouchableOpacity>
      </View>

      {displayGoals()}
      <View style={styles.chatButton}>
        <ChatButton navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  navBar: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "flex-start",
    justifyContent: "center"
  },
  navBarButtons: {
    height: 35,
    width: 100,
    borderRadius: 15,
    backgroundColor: COLORS.foreground,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 3,
    marginLeft: 12
  },
  buttonText: {
    color: "black",
    fontSize: 11,
    fontWeight: "700",
  },
  chatButton: {
    alignSelf: "flex-end",
    margin: 10,
  },
  createTimelineButton: {
    height: 35,
    width: 100,
    borderRadius: 15,
    backgroundColor: COLORS.highlight,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 3,
    marginLeft: 17
  },
  createTimelineText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: "700"
  }
  
});
