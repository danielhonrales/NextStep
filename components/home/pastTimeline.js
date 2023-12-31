import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { COLORS } from "../colors";


export function PastTimeline({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>     
        <TouchableWithoutFeedback onPress={() => navigation.navigate('TimelinePage', {navigation: navigation, name: "Buying a Car"})}>
        <View style={styles.timelineContainer}>
          <Image
            source={require("./../../assets/TimelineImages/BuyingCar.jpg")}
            style={styles.images}
          />
          <View style={styles.description}>
            <Text style={styles.timelineText}>Buying a Car</Text>
          </View>
        </View>
        </TouchableWithoutFeedback>
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
    borderWidth: 2.5
  },
  images: {
    height: 200,
    width: 325,
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
    paddingBottom: 10,
    fontFamily: 'monospace'
  },
});
