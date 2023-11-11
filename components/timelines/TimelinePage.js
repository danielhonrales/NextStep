import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { FONTS } from "../fonts";
import { COLORS } from "../colors";
import { ScrollView, TouchableOpacity, Image, Modal, StyleSheet, View } from "react-native"
import { TimelineStep } from "./TimelimeStep";

export function TimelinePage({route, navigation}) {
    const stepsInfo = useSelector(state => state.timelines[route.params.name].steps)
    const [steps, setSteps] = useState(buildSteps(stepsInfo))

    function buildSteps(stepsInfo) {
        stepList = []
        stepsInfo.forEach(stepInfo => {
            stepList.push(<TimelineStep name={stepInfo.name} key={stepInfo.id}/>);
            
        });
        return stepList
    }

    return <View style={styles.pageView}>
        {steps}
    </View>
}

const styles = StyleSheet.create({
    pageView: {
        height: '100%',
        width: '100%',
        alignItems: 'flex-end',
    },
})