import { Button, Image, TouchableOpacity, StyleSheet } from "react-native"
import { COLORS } from "../colors"

export function ChatButton({navigation}) {
    return <TouchableOpacity
        title='Chat Button'
        style={styles.touchable}
        onPress={() => navigation.navigate('ChatMenu')}
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
        width: 100,
        height: 100,
        backgroundColor: COLORS.accent,
        borderRadius: 50,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    }
})