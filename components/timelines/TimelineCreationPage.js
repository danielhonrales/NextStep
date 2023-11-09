import React from "react"
import { FONTS } from "../fonts";
import { COLORS } from "../colors";
import { ScrollView, TouchableOpacity, Image, Modal, StyleSheet, View } from "react-native"
import { TimelineStep } from "./TimelimeStep";

export function TimelineCreationPage({navigation, name, steps}) {
return (
    <Button title="createButton"
    onPress={() => (
        <View style={styles.stepView}>
        <Text style={styles.stepName}>{name}</Text>
        <View style={styles.iconsView}>
            <TouchableOpacity
            style={styles.icon}
            onPress={() => console.log("Change status")}
            >
                <Image 
                source={require('./../../assets/inprogress.png')}
                style={styles.statusIcon}
                />
            </TouchableOpacity>
            
            <TouchableOpacity
            style={styles.icon}
            onPress={() => console.log("expand")}
            >
                <Image 
                source={require('./../../assets/dropdownIcon.png')}
                style={styles.dropdownIcon}
                />
            </TouchableOpacity>
        </View>
    </View>
    )}/>
)
    createButton
}

const styles = StyleSheet.create({
    createButton : {
        height: 15,
        width: 45,
    },
})