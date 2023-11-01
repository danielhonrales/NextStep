import React from "react"
import { FONTS } from "../fonts";
import { COLORS } from "../colors";
import { View, ScrollView, Text, Button, Image, TouchableWithoutFeedback, StyleSheet } from "react-native"

export function UserProfile({navigation, handleModal, user, subtitle, qualifications}) {
    return (
        <View style={styles.centeringModal}>
            <View style={styles.container}>
                <TouchableWithoutFeedback
                onPress = {handleModal}
                >
                    <Image 
                    source={require('./../../assets/x.png')}
                    style={styles.x}
                    />
                </TouchableWithoutFeedback>

                <Image 
                    source={require('./../../assets/user.png')}
                    style={styles.image}
                />

                <Text style={styles.user}>{user}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>

                <Text style={styles.qualificationsTitle}>Qualifications</Text>
                <View style={styles.qualificationsBorder}>
                    <ScrollView horizontal={true} contentContainerStyle={styles.qualifications}>
                        <Image 
                        source={require('./../../assets/document.png')}
                        style={styles.document}
                        />
                        <Image 
                        source={require('./../../assets/document.png')}
                        style={styles.document}
                        />
                        <Image 
                        source={require('./../../assets/document.png')}
                        style={styles.document}
                        />
                        <Image 
                        source={require('./../../assets/document.png')}
                        style={styles.document}
                        />
                    </ScrollView>
                </View>

                <TouchableWithoutFeedback
                onPress = {() => navigation.navigate('DirectMessaging')}
                >
                    <Text style={styles.messageButton}>Message</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centeringModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: '10%'
    },
    container: {
        width: '70%',
        height: '70%',
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: COLORS.background,
        borderColor: COLORS.highlight,
        borderWidth: 4,
        borderRadius: 25,
    },
    x: {
        margin: 15,
        width: 20,
        height: 20,
        alignSelf: "flex-end"
    },
    image: {
        margin: 5,
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        alignSelf: "center"
    },
    user: {
        textAlign: 'center',
        fontSize: FONTS.titleSize,
        margin: 5,
        marginBottom: 0
    },
    subtitle: {
        textAlign: 'center',
        fontSize: FONTS.subtitleSize,
        marginBottom: 25,
        fontStyle: 'italic',
    },
    qualificationsTitle: {
        textAlign: 'left',
        fontSize: FONTS.textSize,
        marginLeft: 5,
        marginBottom: 3
    },
    qualificationsBorder: {
        borderTopWidth: 4,
        borderBottomWidth: 4,
        width: '100%',
        height: '30%',
        backgroundColor: COLORS.foreground
    },
    qualifications: {
        justifyContent: "center",
        width: '175%'
    },
    document: {
        width: 100,
        height: 100,
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center'
    },
    messageButton: {
        padding: 5,
        marginTop: 25,
        backgroundColor: COLORS.accent,
        fontSize: FONTS.subtitleSize,
        textAlign: 'center',
        alignSelf: 'center',
        color: COLORS.white
    }
})