import React from "react"
import { FONTS } from "../fonts";
import { COLORS } from "../colors";
import { Text, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity, Image, Modal, StyleSheet } from "react-native"
import { Message } from "./Message"
import { UserMessage } from "./Message";
import { UserProfile } from "./UserProfile";

const user = "Me"
const otherUser = "Helper"
const automatedResponse = "Thanks for sending a message! This is an automated response, but you can click on my profile picture to see my profile and direct message me for more automated responses!"

export function ChatPage({navigation}) {
    
    const [input, setText] = React.useState('');
    const [feed, onMessageSent] = React.useState([]);
    const [profileModelVisible, setProfileModelVisible] = React.useState(false);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );
    
    function getMessageTimestamp(){
        const timestamp = new Date().toISOString()
        return timestamp
    }

    function sendUserMessage(text) {
        if (text != "") {
            const newFeed = feed.concat(<UserMessage user={user} text={text} key={user + getMessageTimestamp()}/>)
            onMessageSent(newFeed)
            setText("")
            sendAutomatedResponse(newFeed)
        }
    }

    async function sendAutomatedResponse(newFeed) {
        await delay(1500)
        const newerFeed = newFeed.concat(<Message user={otherUser} text={automatedResponse} handleModal={() => setProfileModelVisible(true)} key={otherUser + getMessageTimestamp()}/>)
        onMessageSent(newerFeed)
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'margin'} keyboardVerticalOffset={64} keyboardShouldPersistTaps='handled' style={styles.container}>
            <ScrollView  ref={ref => {this.scrollView = ref}} onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})} contentContainerStyle={styles.feed}>
                <UserMessage user={user} text="Hello!"/>
                <Message user={otherUser} text="Hello!" handleModal={() => setProfileModelVisible(true)}/>
                {feed}
            </ScrollView>

            <ScrollView scrollEnabled={false} keyboardShouldPersistTaps='handled' contentContainerStyle={styles.inputView}>
                <TextInput
                style={styles.input}
                onChangeText={setText}
                value={input}
                placeholder="Send a message..."
                multiline={true}
                />
                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {() => sendUserMessage(input)}>
                    <Image 
                    source={require('./../../assets/sendMessage.png')}
                    style={styles.sendMessage}
                    />
                </TouchableOpacity>
            </ScrollView>

            <Modal
            animation='slide'
            visible={profileModelVisible}
            transparent={true}
            onDismiss={() => setProfileModelVisible(false)}
            >
                <UserProfile 
                navigation={navigation} 
                handleModal={() => setProfileModelVisible(false)}
                user={otherUser}
                subtitle="Experienced User"
                qualifications={[]}
                />
            </Modal>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    feed: {
        flexBasis: 'auto',
        minHeight: '95%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 25
    },
    inputView: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        backgroundColor: COLORS.accent,
    },
    input: {
        flex: 9,
        borderWidth: 1,
        padding: 5,
        borderColor: COLORS.foreground,
        backgroundColor: COLORS.foreground,
        fontSize: FONTS.textSize,
    },
    submitButton: {
        flex: 1.5,
        justifyContent: "center",
    },
    sendMessage: {
        width: 30,
        height: 30,
        alignSelf: "center",
        marginLeft: 4,
        marginBottom: 2
    }
});