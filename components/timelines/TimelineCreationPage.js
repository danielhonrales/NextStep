import React, { useState } from "react"
import { FONTS } from "../fonts";
import { COLORS } from "../colors";
import { Text, TouchableOpacity, TextInput, Image, Modal, StyleSheet, View, ScrollView } from "react-native"
import { TimelineStep } from "./TimelimeStep";
import { useSelector, useDispatch } from 'react-redux';
import { STATUS } from "../Status";
import { addStep } from "../redux/timelinesSlice";
import { CreatedStep } from "./CreatedStep";

export function TimelineCreationPage({route, navigation}) {
    const stepsInfo = useSelector(state => state.timelines[route.params.name].steps)
    const [steps, setSteps] = useState(buildSteps([], stepsInfo, 0))

    const dispatch = useDispatch()

    const [name, setName] = React.useState('');

    updateTimeline = () => {
        newSteps = buildSteps([],  stepsInfo, 0)
        
        setSteps(newSteps)
    }

    function buildSteps(stepList, stepsInfo, level) {
        stepsInfo.forEach(stepInfo => {
            // Add new step
            stepList.push(<CreatedStep 
                timelineName={route.params.name} 
                id={stepInfo.id}
                name={stepInfo.name} 
                level={level.toString()}
                updateTimeline={this.updateTimeline}
                status={stepInfo.status}
                key={stepInfo.id}/>
                );

            // Recursively add substeps if exist and expanded
            if (stepInfo.substeps.length != 0 && stepInfo.expanded == true) {
                substeps = buildSteps(stepList, stepInfo.substeps, level + 1)
            }
        });
        return stepList
    }

    function addDummyStep() {
        dispatch(addStep(
            {
                timelineName: "House Hunting",
                step: {
                    id: 0,
                    name: 'stepbruh',
                    status: STATUS.in_progress,
                    substeps: []
                }
            }
        ))
    }

    return (
        <View style={styles.pageView}>
            <View style={styles.arrowLine}/>
            <Image 
            source={require('./../../assets/arrowHead.png')}
            style={styles.arrowIcon}
            />

            <View style={styles.mainView}>
                <View style={styles.nameInputView}>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={setName}
                        value={name}
                        placeholder="Set a name..."
                        multiline={false}
                    />
                </View>
                <ScrollView ref={ref => {this.scrollView = ref}} onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})} contentContainerStyle={styles.scrollView}>

                    {steps}
                    <TouchableOpacity
                    style={styles.newStepButton}
                    onPress={() => addDummyStep }
                    >
                        <Text style={styles.newStep}>New step</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pageView: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
    }, 
    mainView: {
        flex: 1
    },
    nameInputView: {
        height: 75,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    nameInput: {
        height: '100%',
        borderWidth: 1,
        padding: 10,
        borderColor: COLORS.foreground,
        fontSize: 32,
    },
    scrollView: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    newStepButton: {
        width: 150,
        height: 30,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: COLORS.highlight,
    },
    newStep: {
        height: '80%',
        borderRadius: 20,
        fontSize: FONTS.fontSize,
        color: COLORS.white,
        textAlign: 'center',
        alignSelf: 'center',
        paddingTop: 3
    },
    arrowLine: {
        backgroundColor: "#AFAFAF",
        width: 4,
        height: '97%',
        position: "absolute",
        alignSelf: 'flex-start',
        marginLeft: 20,
        zIndex: -1
    },
    arrowIcon: {
        height: 30,
        width: 30,
        position: "absolute",
        alignSelf: "flex-end",
        marginLeft: 7,
    }
})