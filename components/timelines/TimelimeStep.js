import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native"
import { FONTS } from "../fonts"
import { COLORS } from "../colors"
import { STATUS } from "../Status"
import { useDispatch } from 'react-redux';
import { expand } from "../redux/timelinesSlice";
import React, { useState } from "react"

export function TimelineStep({timelineName, name, level, updateTimeline}) {
    const dispatch = useDispatch()

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    function getWidth() {
        value = 90 - (level * 10);
        percentage = value.toString() + "%"
        return percentage
    }

    async function stepPressed() {
        dispatch(expand({
            timelineName: timelineName,
            name: name
        }))

        await delay(0)
        this.updateTimeline()
    }

    function bruh() {
        this.updateTimeline()
    }

    return <TouchableOpacity
        style={[styles.touchable, {width: getWidth()}]}
        onPress={() => stepPressed()}
        >
        <View style={[styles.stepView]}>
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
        borderWidth: 2,
        borderColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 100,
        borderRadius: 25,
        margin: 10,
    },
    stepView: {
        flex: 1,
        flexDirection: 'row',
    },
    stepName: {
        flex: 4,
        fontSize: FONTS.titleSize,
        alignSelf: 'center',
        paddingLeft: 10,
        flexWrap: 'wrap',
    },
    iconsView: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
    },
    icon: {
        flex: 1,
        justifyContent: "flex-end"
    },
    statusIcon: {
        height: 15,
        width: 45,
        alignSelf: 'center',
        marginBottom: 10,
    },
    dropdownIcon: {
        height: 30,
        width: 30,
        resizeMode: 'center',
        alignSelf: 'center',
        marginBottom: 5
    },
})