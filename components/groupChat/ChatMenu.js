import React from "react"
import { FONTS } from "../fonts";
import { COLORS } from "../colors";
import { TextInput, View, ScrollView, StyleSheet } from "react-native"
import { Message } from "./Message"

export function ChatMenu({navigation}) {
    const [input, onChangeNumber] = React.useState('');

    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true} contentContainerStyle={styles.container}>
            <ScrollView automaticallyAdjustKeyboardInsets={true} contentContainerStyle={styles.feed}>
                <Message text="bro"/>
                <Message text="broski"/>
            </ScrollView>
            <Message user="bruh" text="bro"/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={input}
                placeholder="Send a message..."
            />
            <Message user="bruh" text="bro"/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        
    },
    feed: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    input: {
        height: 60,
        margin: 0,
        borderWidth: 1,
        padding: 0,
        borderColor: COLORS.foreground,
        backgroundColor: COLORS.foreground,
        fontSize: FONTS.textSize,
    },
});