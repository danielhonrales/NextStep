import React from "react";
import { Text, View, StyleSheet, TextInput, ScrollView} from "react-native";
import { COLORS } from "../colors";

export function LoginPage ({navigation}) {
    return (
      <ScrollView>
        <Text style = {{margin : 16, borderWidth : 2, 
            borderColor : '#fff', padding : 16}}>Username</Text>
        <Text style = {{margin : 16, borderWidth : 2, 
            borderColor : '#fff', padding : 16 }}>'Password' </Text>
        <Button title = 'Login' />
      </ScrollView>
    )
}
