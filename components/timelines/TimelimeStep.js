import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native"
import { FONTS } from "../fonts"
import { COLORS } from "../colors"
import { STATUS } from "../Status"
import React from "react"

export function TimelineStep({name}) {
    const [status, setStatus] = React.useState(STATUS.in_progress)
    const [expanded, setExpanded] = React.useState(false);
    const [substeps, setSubsteps] = React.useState([])

    return <TouchableOpacity
        style={styles.touchable}
        onPress={() => console.log("Open step breakdown")}
        >
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
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    touchable: {
        borderWidth: 3,
        borderColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        borderRadius: 35,
    },
    stepView: {
        flex: 1,
        flexDirection: 'row'
    },
    stepName: {
        flex: 4,
        fontSize: FONTS.subtitleSize,
        alignContent: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 5
    },
    iconsView: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'flex-end',
        paddingRight: 5
    },
    icon: {
        height: 15,
        width: 45,
    },
    dropdownIcon: {
        height: 15,
        width: 45,
    },
    statusIcon: {
        height: 15,
        width: 45,
    }
})