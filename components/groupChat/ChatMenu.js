import React from "react"
import { FONTS } from "../fonts";
import { COLORS } from "../colors";
import { TextInput, View, StyleSheet } from "react-native"

export function ChatMenu({navigation}) {
    const [input, onChangeNumber] = React.useState('');

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={input}
                placeholder="Send a message..."
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {

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