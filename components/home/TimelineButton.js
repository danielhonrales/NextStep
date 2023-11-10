import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import { FONTS } from "../fonts"
import { COLORS } from "../colors"
import { Status } from "../Status"
import React from "react"

export function TimelineButton({navigation, name, status}) {
    return <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('TimelinePage', {name: name})}
        >
            <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    touchable: {
        width: 100,
        height: 100,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: FONTS.subtitleSize,
        borderWidth: 3,
        borderColor: COLORS.black,
        borderRadius: 6,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: "center"
    },
})