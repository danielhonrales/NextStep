import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native"
import { FONTS } from "../fonts"
import { COLORS } from "../colors"
import { STATUS } from "../Status"
import { useSelector, useDispatch } from 'react-redux';
import { expand, toggleStatus } from "../redux/timelinesSlice";
import React, { useState } from "react"

export function TimelineStep({navigation, timelineName, id, name, level, expanded, status, leaf}) {
    const dispatch = useDispatch()

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    function getWidth() {
        value = 95 - (level * 10);
        percentage = value.toString() + "%"
        return percentage
    }

    function setDropdownRotation() {
        return expanded ? '180deg' : '0deg'
    }

    
    function getStatusIcon() {
        icon = status == STATUS.in_progress ? require('./../../assets/done.png') : require('./../../assets/checkmark.png')
        return icon
    }

    function getStatusIconPos() {
        leafPos = {
            justifyContent: 'flex-start',
            marginTop: 12
        }
        return leaf ? leafPos : {}
    }

    function getStatusColor() {
        return status == STATUS.in_progress ? COLORS.background : COLORS.accent
    }
    
    function getNameColor() {
        return status == STATUS.in_progress ? COLORS.black : COLORS.white
    }

    function getCornerIcon() {
        if (!leaf) {
            return <TouchableOpacity
            style={styles.icon}
            onPress={() => expandStep()}
            >
                <Image 
                source={require('./../../assets/dropdownIcon.png')}
                style={
                    [
                        styles.dropdownIcon,
                        {transform: [{ rotate: setDropdownRotation()}]}
                    ]
                }
                />
            </TouchableOpacity>
        } else {
            return <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate('Extra Resources')}
            >
                <Image 
                source={require('./../../assets/extraResources.png')}
                style={styles.extraResourcesIcon}
                />
            </TouchableOpacity>
        }
    }

    async function expandStep() {
        dispatch(expand({
            timelineName: timelineName,
            id: id
        }))

        await delay(0)
        this.updateTimeline()
    }

    async function statusUpdate() {
        dispatch(toggleStatus({
            timelineName: timelineName,
            id: id
        }))

        await delay(0)
        this.updateTimeline()
    }

    return <TouchableOpacity
        style={[styles.touchable, {width: getWidth(), backgroundColor: getStatusColor()}]}
        onPress={() => expandStep()}
        onLongPress={() => statusUpdate()}
        >
        <View style={[styles.stepView]}>
            <Text style={[styles.stepName, {color: getNameColor()}]}>{name}</Text>
            <View style={styles.iconsView}>
                <TouchableOpacity
                style={[styles.icon, getStatusIconPos()]}
                onPress={() => statusUpdate()}
                >
                    <Image 
                    source={getStatusIcon()}
                    style={styles.statusIcon}
                    />
                </TouchableOpacity>
                
                <View style={styles.iconBuffer}/>

                {getCornerIcon()}
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
        backgroundColor: COLORS.foreground,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25
    },
    icon: {
        flex: 1,
        justifyContent: "flex-end"
    },
    statusIcon: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        marginBottom: 5,
    },
    dropdownIcon: {
        height: 30,
        width: 30,
        resizeMode: 'center',
        alignSelf: 'center',
        marginBottom: 5,
    },
    extraResourcesIcon: {
        height: 30,
        width: 30,
        resizeMode: 'center',
        alignSelf: 'center',
        marginBottom: 5,
    },
    iconBuffer: {
        height: 2,
        backgroundColor: COLORS.gray,
        width: '80%',
        alignSelf: "center"
    }
})