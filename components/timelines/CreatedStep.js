import { TouchableOpacity, View, Image, TextInput, StyleSheet } from "react-native"
import { FONTS } from "../fonts"
import { COLORS } from "../colors"
import { STATUS } from "../Status"
import { useSelector, useDispatch } from 'react-redux';
import { changeStepName, expand, toggleStatus } from "../redux/timelinesSlice";
import React, { useState } from "react"

export function CreatedStep({timelineName, id, name, level, status}) {
    const dispatch = useDispatch()

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    async function changeName(newName) {
        dispatch(changeStepName({
            timelineName: timelineName,
            id: id,
            newName: newName
        }))

        await delay(0)
        this.updateTimeline()
    }

    function getWidth() {
        value = 95 - (level * 10);
        percentage = value.toString() + "%"
        return percentage
    }

    return (
        <View style={[styles.stepView, {width: getWidth()}]}>

            <TextInput
                style={styles.stepName}
                onChangeText={changeName(name)}
                value={name}
                placeholder="Name this step..."
                multiline={false}
            />
            <View style={styles.iconsView}>
                <TouchableOpacity
                style={styles.icon}
                onPress={() => console.log('delete')}
                >
                    <Image 
                    source={require('./../../assets/extraResources.png')}
                    style={styles.xIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    stepView: {
        borderWidth: 2,
        borderColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 100,
        borderRadius: 25,
        margin: 10,
        flexDirection: 'row',
    },
    stepName: {
        flex: 4,
        fontSize: FONTS.titleSize,
        alignSelf: 'center',
        paddingLeft: 10,
        flexWrap: 'wrap',
    },
    icon: {
        height: 30,
        width: 30,
    },
    xIcon: {
        height: 30,
        width: 30,
        alignSelf: 'center',
    },
})