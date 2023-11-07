import { FONTS } from "../fonts"
import { COLORS } from "../colors"
import { STEP_STATUS } from "./StepStatus"
import {Image} from "../dropdownicon.png"
import {Image} from "../inprogress.png"
import React from "react"
import {View, Text, Image, ScrollView, TextInput, 
    TouchableOpacity, Button, Stylesheet} from 'react-native';



export function TimelineBreakdown ({Navigation} ) {

    <view> 
    <image>
        dropdownicon
    </image>

    <Button title = 'Expand' />
  
</view>
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