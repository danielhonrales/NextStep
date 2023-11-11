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
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.userSuggestions}>
          <View style={styles.imageContainer}>
            <Image
              source={require("./../../assets/UserSuggestions/brickBlock.webp")}
              style={styles.Image}
            />
          </View>
          <View style={styles.profileSection}>
            <Image
              source={require("./../../assets/profilepics/pfp1.jpg")}
              style={styles.profilepic}
            />
            <Text style={styles.profileName}> John S.</Text>
          </View>
        </View>

        <View style={styles.userSuggestions}>
          <View style={styles.imageContainer}>
            <Image
              source={require("./../../assets/UserSuggestions/cobblestoneBlock.webp")}
              style={styles.Image}
            />
          </View>
          <View style={styles.profileSection}>
            <Image
              source={require("./../../assets/profilepics/pfp2.jpg")}
              style={styles.profilepic}
            />
            <Text style={styles.profileName}> Jane S.</Text>
          </View>
        </View>

        <View style={styles.userSuggestions}>
          <View style={styles.imageContainer}>
            <Image
              source={require("./../../assets/UserSuggestions/woodBlock.webp")}
              style={styles.Image}
            />
          </View>
          <View style={styles.profileSection}>
            <Image
              source={require("./../../assets/profilepics/pfp3.jpg")}
              style={styles.profilepic}
            />
            <Text style={styles.profileName}> User123</Text>
          </View>
        </View>

        <View style={styles.userSuggestions}>
          <View style={styles.imageContainer}>
            <Image
              source={require("./../../assets/UserSuggestions/woodenPlank.webp")}
              style={styles.Image}
            />
          </View>
          <View style={styles.profileSection}>
            <Image
              source={require("./../../assets/profilepics/pfp4.webp")}
              style={styles.profilepic}
            />
            <Text style={styles.profileName}> RazorX</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: 100,
    height: 100,
  },
  horizontalSection: {
    width: "90%",
    height: "22%",
    marginLeft: 15,
  },
  suggestionsHolder: {
    justifyContent: "center",
  },
  imageContainer: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.black,
    marginLeft: 10,
    alignSelf: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 15,
    elevation: 10,
  },
  userSuggestions: {},
  profilepic: {
    width: 30,
    height: 30,
    borderColor: COLORS.black,
    borderWidth: 2,
    borderRadius: 20,
    marginLeft: 8,
    marginTop: 4,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "400",
    marginLeft: 10,
  },
});
