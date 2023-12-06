import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../colors";
import { useSelector, useDispatch } from 'react-redux';


export function CurrentTimeline({navigation}) {
  const timelinesInfo = useSelector(state => state.timelines)
  const [dynamicTimelines, updateTimelines] = useState(buildTimelines([], timelinesInfo))

  function buildTimelines(timelinesList, timelinesInfo) {
    Object.values(timelinesInfo).forEach(timelineInfo => {
      //console.log(timelineInfo)
      if (!Number.isInteger(timelineInfo)) {
        if (timelineInfo.name == "House Hunting") {
          timelinesList.push(
            <View style={styles.timelineContainer}>
              <Image
                source={require("./../../assets/TimelineImages/HouseHunting.jpg")}
                style={styles.images}
              />
              <View style={styles.description}>
                <Text style={styles.timelineText}>{timelineInfo.name}</Text>
                <TouchableOpacity 
                style={styles.viewButton}
                onPress={() => navigation.navigate('TimelinePage', {navigation: navigation, name: timelineInfo.name})}>
                  <Text style={styles.viewText}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
            );
        } else {
          timelinesList.push(
          <View style={styles.timelineContainer}>
            <Image
              source={require("./../../assets/TimelineImages/timeline.jpg")}
              style={styles.images}
            />
            <View style={styles.description}>
              <Text style={styles.timelineText}>{timelineInfo.name}</Text>
              <TouchableOpacity 
              style={styles.viewButton}
              onPress={() => navigation.navigate('TimelinePage', {navigation: navigation, name: "Filler Timeline"})}>
                <Text style={styles.viewText}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
          );
        }
      }
    });

    return timelinesList
}


  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {dynamicTimelines}

        <View style={styles.timelineContainer}>
          <Image
            source={require("./../../assets/TimelineImages/WeddingPlanning.webp")}
            style={styles.images}
          />
          <View style={styles.description}>
            <Text style={styles.timelineText}>Wedding Planning</Text>
            <TouchableOpacity 
            style={styles.viewButton}
            onPress={() => navigation.navigate('TimelinePage', {navigation: navigation, name: "Filler Timeline"})}>
              <Text style={styles.viewText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.timelineContainer}>
          <Image
            source={require("./../../assets/TimelineImages/RetirementPlanning.jpg")}
            style={styles.images}
          />
          <View style={styles.description}>
            <Text style={styles.timelineText}>Retirement Plan</Text>
            <TouchableOpacity 
            style={styles.viewButton}
            onPress={() => navigation.navigate('TimelinePage', {navigation: navigation, name: "Filler Timeline"})}>
              <Text style={styles.viewText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
  },
  timelineContainer: {
    backgroundColor: COLORS.white,
    elevation: 2,
    borderRadius: 12,
    marginBottom: 25,
    borderColor: '#EDEADE',
    borderWidth: 1.2
  },
  images: {
    height: 200,
    width: 355,
    borderRadius: 15,
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewButton: {
    width: 50,
    height: 25,
    backgroundColor: COLORS.highlight,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 10,
    marginRight: 12,
    marginBottom: 10,
  },
  viewText: {
    color: COLORS.white,
    fontWeight: '700'
  },
  timelineText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingTop: 6,
    fontFamily: 'monospace'
  },
});
