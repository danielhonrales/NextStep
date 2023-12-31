import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { COLORS } from "../colors";
import { ChatButton } from "../groupChat/ChatButton";
import { TimelineButton } from "./TimelineButton";
import { CurrentTimeline } from "./currentTimeline";
import { PastTimeline } from "./pastTimeline";
import { STATUS } from "../Status";
import { FONTS } from "../fonts";
import { newTimeline } from "../redux/timelinesSlice";
import { useSelector, useDispatch } from 'react-redux';

export function HomePage({ route, navigation }) {
  const dispatch = useDispatch()
  const [selectedGoal, setSelectedGoal] = useState(route.params.goal);

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  async function makeNewTimeline() {
    dispatch(newTimeline())

    await delay(0)
  }

  setToPast = () => {
    setSelectedGoal("past")
  }

  // Displays the designated timelines
  const displayGoals = () => {
    if (selectedGoal === "current") {
      return <CurrentTimeline navigation={navigation}/>;
    } else if (selectedGoal === "past") {
      return <PastTimeline navigation={navigation}/>;
    } else {
      return <CurrentTimeline navigation={navigation}/>;
    }
  };

  function pickNavBarStyle(goal) {
    if ((goal === "current" && selectedGoal === "current") || (goal === "past" && selectedGoal === "past")) {
      return styles.selectedNavBarButton
    } else {
      return styles.navBarButtons
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={pickNavBarStyle("current")}
          onPress={() => setSelectedGoal("current")}
        >
          <Text style={styles.buttonText}>Current Timelines</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={pickNavBarStyle("past")}
          onPress={() => setSelectedGoal("past")}
        >
          <Text style={styles.buttonText}>Past Timelines</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createTimelineButton}
          onPress={() => {
              makeNewTimeline()
              navigation.navigate("Timeline Creation", {name: "NewTimeline", setPast: setToPast})
            }
          }
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
    width: 110,
    borderRadius: 15,
    backgroundColor: COLORS.foreground,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 3,
    marginLeft: 12
  },
  selectedNavBarButton: {
    height: 35,
    width: 110,
    borderRadius: 15,
    backgroundColor: COLORS.foreground,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 3,
    marginLeft: 12,
    borderColor: COLORS.accent,
    borderWidth: 3
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
