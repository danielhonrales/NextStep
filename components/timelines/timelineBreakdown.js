import { FONTS } from "../fonts"
import { COLORS } from "../colors"
import { STEP_STATUS } from "./StepStatus"
import React from "react"
import {View, Text, Image, ScrollView, TextInput, 
    TouchableOpacity, Button, Stylesheet} from 'react-native';

// tasks: 
// click on the dropdown icon to expand out the timeline
// click it again to collapse 


export function TimelineBreakdown ({Navigation} ) {
    return (
        <view> 
        <Image 
            source={require('./../../assets/dropdownIcon.png')}
            style={styles.x}
        />
        <Button title = "dropdownIcon" 
                    onPress={() => (
                    <view style = {styles.dropdownIcon}/> 

        ) } />
        <view>
        </view>
    </view>
    )

   
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