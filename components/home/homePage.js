import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { COLORS } from "../colors";
import { ChatButton } from "../groupChat/ChatButton"

export function HomePage({navigation}) {
    return (
        <View style={styles.container}>
            <View>
                <Text>Current Timelines</Text>
                { 
                // Scrollable component
                }
            </View>

            <View>
                <Text>Past Timelines</Text>
                { 
                // Scrollable component
                }
            </View>

            <ChatButton navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
})