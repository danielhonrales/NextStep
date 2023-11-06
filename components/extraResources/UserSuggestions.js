import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { COLORS } from "../colors";
import { FONTS } from "../fonts";
import { ChatButton } from "../groupChat/ChatButton";

export function UserSuggestions({ navigation, suggestions, users }) {
  return (
    <View style={styles.horizontalSection}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.suggestionsHolder}
      >
        <Image
          source={require("./../../assets/UserSuggestions/brickBlock.webp")}
          style={styles.suggestionBlock}
        />
        <Image
          source={require("./../../assets/UserSuggestions/cobblestoneBlock.webp")}
          style={styles.suggestionBlock}
        />
        <Image
          source={require("./../../assets/UserSuggestions/woodBlock.webp")}
          style={styles.suggestionBlock}
        />
        <Image
          source={require("./../../assets/UserSuggestions/woodenPlank.webp")}
          style={styles.suggestionBlock}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  suggestionBlock: {
    width: 100,
    height: 100,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center",
  },
  horizontalSection: {
    width: "100%",
    height: "20%",
  },
  suggestionsHolder: {
    justifyContent: "center",
    width: "115%",
  },
});
