import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, Linking} from "react-native";
import { COLORS } from "../colors";
import { FONTS } from "../fonts";
import { ChatButton } from "../groupChat/ChatButton";

export function QuickReferences({ navigation, suggestions, users }) {


  return (
    <View style={styles.verticalBorder}>
      <ScrollView
        vertical={true}
        contentContainerStyle={styles.suggestionHolder}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.referenceBoxes}>
          <Text style={styles.titles}>
            Best Materials to Build a House: Full Guide
          </Text>
          <Text style={styles.websites} onPress={() => Linking.openURL('https://www.bigrentz.com/blog/best-materials-to-build-a-house')}>
            https://www.bigrentz.com/blog/best-materials-to-build-a-house
          </Text>
        </View>

        <View style={styles.referenceBoxes}>
          <Text style={styles.titles}>Building and Constructing</Text>
          <Text style={styles.websites} onPress={() => Linking.openURL('https://minecraft.fandom.com/wiki/Tutorials/Construction')} >https://minecraft.fandom.com/wiki/Tutorials/Construction</Text>
        </View>

        <View style={styles.referenceBoxes}>
          <Text style={styles.titles}>Shelter Types</Text>
          <Text style={styles.websites} onPress={() => Linking.openURL('https://minecraft.fandom.com/wiki/Tutorials/Shelter_types')}>https://minecraft.fandom.com/wiki/Tutorials/Shelter_types</Text>
        </View>
        <View style={styles.referenceBoxes}>
          <Text style={styles.titles}>Best Biome for Homes</Text>
          <Text style={styles.websites} onPress={() => Linking.openURL('https://minecraft.fandom.com/wiki/Tutorials/Best_biomes_for_homes')}>https://minecraft.fandom.com/wiki/Tutorials/Best_biomes_for_homes</Text>
        </View>
        <View style={styles.referenceBoxes}>
          <Text style={styles.titles}>Best Building Materials</Text>
          <Text style={styles.websites} onPress={() => Linking.openURL('https://minecraft.fandom.com/wiki/Tutorials/Best_building_materials')}>https://minecraft.fandom.com/wiki/Tutorials/Best_building_materials</Text>
        </View>
        <View style={styles.referenceBoxes}>
          <Text style={styles.titles}>Village Mechanics</Text>
          <Text style={styles.websites} onPress={() => Linking.openURL('https://minecraft.fandom.com/wiki/Village_mechanics')}>https://minecraft.fandom.com/wiki/Village_mechanics</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  referenceBoxes: {
    width: 340,
    height: 100,
    borderWidth: 2,
    borderRadius: 15,
    padding: 3,
    backgroundColor: "#FFF",
    marginBottom: 10,
    elevation: 2,
  },
  verticalBorder: {
    width: "100%",
    height: "64%",
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
