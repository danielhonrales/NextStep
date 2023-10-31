import React from "react"
import { FONTS } from "../fonts";
import { COLORS } from "../colors";
import { View, StyleSheet } from "react-native"

export function Message({user, text}) {
    return (
        <View style={styles.bubble}>
            <Text style={styles.text}>ummm {text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bubble: {
        backgroundColor: COLORS.foreground,
    },
    text: {
        fontSize: FONTS.textSize
    }
});