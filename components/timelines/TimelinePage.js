import React, { useState } from "react"
import { useSelector } from 'react-redux';
import { FONTS } from "../fonts";
import { COLORS } from "../colors";
import { ScrollView, TouchableOpacity, Image, Modal, StyleSheet, View, Button } from "react-native"
import { TimelineStep } from "./TimelimeStep";

export function TimelinePage({route, navigation}) {
    const stepsInfo = useSelector(state => state.timelines[route.params.name].steps)
    const [steps, setSteps] = useState(buildSteps([], stepsInfo, 0))
    const [task, updateScreen] = useState(1)

    updateTimeline = () => {
        newSteps = buildSteps([],  stepsInfo, 0)
        setSteps(newSteps)
    }

    function buildSteps(stepList, stepsInfo, level) {
        stepsInfo.forEach(stepInfo => {
            // Add new step
            stepList.push(<TimelineStep 
                timelineName={route.params.name} 
                name={stepInfo.name} 
                level={level.toString()}
                updateTimeline={this.updateTimeline}
                key={stepInfo.id}/>
                );

            // Recursively add substeps if exist and expanded
            if (stepInfo.substeps.length != 0 && stepInfo.expanded == true) {
                substeps = buildSteps(stepList, stepInfo.substeps, level + 1)
            }
        });
        return stepList
    }

    return <ScrollView contentContainerStyle={styles.pageView}>
        {steps}
    </ScrollView>
}

const styles = StyleSheet.create({
    pageView: {
        width: '100%',
        alignItems: 'flex-end',
        fontFamily: 'Damascus'
    },
})