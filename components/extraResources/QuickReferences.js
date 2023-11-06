import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { COLORS } from "../colors";
import { FONTS } from "../fonts";
import { ChatButton } from "../groupChat/ChatButton";

export function QuickReferences({ navigation, suggestions, users }) {
  return (
    <View style={styles.verticalBorder}>
      <ScrollView
        vertical={true}
        contentContainerStyle={styles.suggestionHolder}
      >
        <View style={styles.referenceBoxes}>
          <Text style={styles.titles}>
            Best Materials to Build a House: Full Guide
          </Text>
          <Text style={styles.websites}>
            https://www.bigrentz.com/blog/best-materials-to-build-a-house
          </Text>
        </View>

        <View style={styles.referenceBoxes}>
          <Text style={styles.titles}>Other Website</Text>
          <Text style={styles.websites}>www.website.com</Text>
        </View>

        <View style={styles.referenceBoxes}>
          <Text style={styles.titles}>Other Website</Text>
          <Text style={styles.websites}>www.website.com</Text>
        </View>
        <View style={styles.referenceBoxes}>
          <Text style={styles.titles}>Other Website</Text>
          <Text style={styles.websites}>www.website.com</Text>
        </View>
        <View style={styles.referenceBoxes}>
          <Text style={styles.titles}>Other Website</Text>
          <Text style={styles.websites}>www.website.com</Text>
        </View>
        <View style={styles.referenceBoxes}>
          <Text style={styles.titles}>Other Website</Text>
          <Text style={styles.websites}>www.website.com</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  referenceBoxes: {
    width: 300,
    height: 100,
    borderWidth: 4,
    borderRadius: 15,
    padding: 3,
    backgroundColor: "#FFF",
    marginBottom: 10,
  },
  verticalBorder: {
    width: "100%",
    height: "67%",
    alignItems: "center",
  },
  suggestionHolder: {
    justifyContent: "center",
    width: "115%",
  },
  titles: {
    fontSize: 20,
  },
  websites: {
    color: "#578DA3",
  },
});
