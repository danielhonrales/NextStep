import React from "react"
import { FONTS } from "../fonts";
import { COLORS } from "../colors";
import { ScrollView, TouchableOpacity, Image, Modal, StyleSheet, View } from "react-native"
import { TimelineStep } from "./TimelimeStep";

export function TimelinePage({navigation, name, steps}) {
    return <View style={styles.pageView}>
        <TimelineStep name="step"/>
    </View>
}

const styles = StyleSheet.create({
    pageView: {
        height: '100%',
        width: '100%'
    }
})