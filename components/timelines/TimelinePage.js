import React, { useState } from "react"
import { useSelector } from 'react-redux';
import { FONTS } from "../fonts";
import { COLORS } from "../colors";
import { ScrollView, TouchableOpacity, Image, Modal, StyleSheet, View, Button } from "react-native"
import { TimelineStep } from "./TimelimeStep";
import { STATUS } from "../Status";

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
                navigation={navigation}
                timelineName={route.params.name} 
                id={stepInfo.id}
                name={stepInfo.name} 
                level={level.toString()}
                updateTimeline={this.updateTimeline}
                expanded={stepInfo.expanded}
                status={stepInfo.status}
                leaf={stepInfo.substeps.length == 0}
                key={stepInfo.id}/>
                );

            // Recursively add substeps if exist and expanded
            if (stepInfo.substeps.length != 0 && stepInfo.expanded == true) {
                substeps = buildSteps(stepList, stepInfo.substeps, level + 1)
            }
        });
        return stepList
    }

    return <View style={styles.pageView}>
        
        <View style={styles.arrowLine}/>
        <Image 
        source={require('./../../assets/arrowHead.png')}
        style={styles.arrowIcon}
        />
        <View style={styles.cutoffView}>
            <ScrollView ref={ref => {this.scrollView = ref}} onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})} contentContainerStyle={styles.timelineView}>
                
                {steps}
                <View style={{height: 20}}/>
            </ScrollView>
        </View>
    </View>
}

const styles = StyleSheet.create({
    pageView: {
        width: '100%',
        height: '100%',
        flexDirection: 'row'
    },
    cutoffView: {
        width: '100%',
        height: '100%'
    },
    timelineView: {
        width: '100%',
        alignItems: 'flex-end',
        fontFamily: 'Damascus',
        minHeight: '100%',
        paddingTop: 100
    },
    arrowLine: {
        backgroundColor: "#AFAFAF",
        width: 4,
        height: '97%',
        position: "absolute",
        alignSelf: 'flex-start',
        marginLeft: 30,
        zIndex: -1
    },
    arrowIcon: {
        height: 30,
        width: 30,
        position: "absolute",
        alignSelf: "flex-end",
        marginLeft: 17,
    }
})