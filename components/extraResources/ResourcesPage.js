import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { COLORS } from "../colors";
import { FONTS } from "../fonts";
import { ChatButton } from "../groupChat/ChatButton";
import { UserSuggestions } from "./UserSuggestions";
import { QuickReferences } from "./QuickReferences";

export function ResourcesPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.titleText}>User Suggestions</Text>
        <Image
          source={require("./../../assets/horizontalScroll.png")}
          style={styles.horizontalScroll}
        />
      </View>
      <UserSuggestions />

      <View style={styles.titleSection}>
        <Text style={styles.titleText}>Quick References</Text>
        <Image
          source={require("./../../assets/verticalScroll.png")}
          style={styles.verticalScroll}
        />
      </View>
      <QuickReferences />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.foreground,
  },
  titleSection: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 16,
    alignItems: "center",
    marginBottom: 4,
  },
  horizontalScroll: {
    height: 45,
    width: 45,
  },
  verticalScroll: {
    height: 40,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 22,
    fontStyle: "italic",
    padding: 1,
    fontWeight: "400",
  },
});
