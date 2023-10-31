import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BaseButton from './components/timelines/buttons';
import COLORS from './components/colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage } from './components/home/homePage';
import { ChatMenu } from './components/groupChat/ChatMenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage}/>
        <Stack.Screen name="ChatMenu" component={ChatMenu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


