import { TouchableOpacity, View, Image, TextInput, StyleSheet } from "react-native"
import { FONTS } from "../fonts"
import { COLORS } from "../colors"
import { STATUS } from "../Status"
import { useSelector, useDispatch } from 'react-redux';
import { changeStepName, expand, toggleStatus, deleteStep } from "../redux/timelinesSlice";
import React, { useState } from "react"

export function CreatedStep({timelineName, id, name, level, status, updateCreatedTimeline}) {
    const dispatch = useDispatch()
    const [stepName, setName] = useState(name)

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    async function changeName() {
        setName()
        dispatch(changeStepName({
            timelineName: timelineName,
            id: id,
            newName: stepName
        }))

        await delay(0)
        this.updateCreatedTimeline()
    }

    async function deleteThisStep() {
        dispatch(deleteStep({
            timelineName: timelineName,
            id: id,
        }))

        await delay(0)
        this.updateCreatedTimeline()
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
                onChangeText={changeName}
                value={stepName}
                placeholder="Name this step..."
                multiline={false}
            />
            <View style={styles.iconsView}>
                <TouchableOpacity
                style={styles.icon}
                onPress={() => deleteThisStep()}
                >
                    <Image 
                    source={require('./../../assets/x.png')}
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
        backgroundColor: COLORS.white
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