import { Button } from "react-native"

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