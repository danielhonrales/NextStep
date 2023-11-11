import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../colors";


export function CurrentTimeline({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.timelineContainer}>
          <Image
            source={require("./../../assets/TimelineImages/HouseHunting.jpg")}
            style={styles.images}
          />
          <View style={styles.description}>
            <Text style={styles.timelineText}>House Hunting</Text>
            <TouchableOpacity style={styles.viewButton}
            onPress={() => navigation.navigate('TimelinePage', {navigation: navigation, name: "House Hunting"})}>
              <Text style={styles.viewText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.timelineContainer}>
          <Image
            source={require("./../../assets/TimelineImages/WeddingPlanning.webp")}
            style={styles.images}
          />
          <View style={styles.description}>
            <Text style={styles.timelineText}>Wedding Planning</Text>
            <TouchableOpacity style={styles.viewButton}>
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
            <TouchableOpacity style={styles.viewButton}>
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
    fontFamily: 'Damascus'
  },
});
