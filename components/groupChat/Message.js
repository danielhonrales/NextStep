import React from "react"
import { FONTS } from "../fonts";
import { COLORS } from "../colors";
import { View, Text, Image, StyleSheet } from "react-native"

export function Message({user, text}) {
    return (
        <View style={styles.container}>
            <Image 
                source={require('./../../assets/user.png')}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.username}>{user}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    )
}

export function UserMessage({user, text}) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={[styles.username, {textAlign: "right"}]}>{user}</Text>
                <Text style={[styles.text, {textAlign: "right"}]}>{text}</Text>
            </View>
            <Image 
                source={require('./../../assets/user.png')}
                style={styles.image}
            />
        </View>
    )
}

// Make separate UserMesssage class

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10
    },
    textContainer: {
        flex: 9,
        flexDirection: "column",
        margin: 10,
        marginTop: 0
    },
    text: {
        fontSize: FONTS.textSize,
        backgroundColor: COLORS.foreground,
        padding: 10,
    },
    image: {
        flex: 1,
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: COLORS.black,
        backgroundColor: COLORS.white,
        marginTop: 5
    },
    username: {
        fontSize: FONTS.textSize,
    }
});