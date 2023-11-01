import { Button, Image, TouchableOpacity, StyleSheet } from "react-native"
import { COLORS } from "../colors"

export function ChatButton({navigation}) {
    return <TouchableOpacity
        title='Chat Button'
        style={styles.touchable}
        onPress={() => navigation.navigate('ChatPage')}
        >
        <Image 
            source={require('./../../assets/chatButton.png')}
            style={styles.image}
        />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    touchable: {
        borderWidth: 1,
        borderColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    }
})