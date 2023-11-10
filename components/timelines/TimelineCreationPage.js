import React, { useState } from "react"
import { FONTS } from "../fonts";
import { COLORS } from "../colors";
import { Text, TouchableOpacity, Image, Modal, StyleSheet, View } from "react-native"
import { TimelineStep } from "./TimelimeStep";
import { useDispatch } from 'react-redux';
import { Step } from "./Step";
import { STATUS } from "../Status";
import { addStep } from "../redux/timelinesSlice";

export function TimelineCreationPage({navigation, name, steps}) {
    const dispatch = useDispatch()

    const addDummyStep = dispatch(addStep({
        timelineName: "House Hunting",
        step: new Step(0, "stepbruh", STATUS.in_progress, [], "None")
    }))

    return (
        <TouchableOpacity
        style={styles.createTimelineButton}
        onPress={() => addDummyStep }
        >
            <Text style={styles.createTimeline}>New step</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    createTimelineButton: {
        width: 75,
        height: 30,
        borderRadius: 20,
        alignContent: 'center',
        alignSelf: 'center'
      },
    createTimeline: {
        width: 150,
        height: 30,
        borderRadius: 20,
        fontSize: FONTS.fontSize,
        color: COLORS.white,
        backgroundColor: COLORS.highlight,
        textAlign: "center",
        textAlignVertical: 'center'
    },
})