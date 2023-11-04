import { Button, StyleSheet } from "react-native"
import { COLORS } from "../colors";

export const ChatButton = () => {
    return <Button
    title="Chat"
    onPress={() => Alert.Alert('why doe')}/>
}

const buttonStyle = StyleSheet.create({
    text: {
        color: COLORS.black
    }
})

// when a timeline is pressed, navigate to its specifics