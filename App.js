import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BaseButton from './components/timelines/buttons';
import COLORS from './components/colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage } from './components/home/homePage';
import { ChatPage } from './components/groupChat/ChatPage';
import { TimelinePage } from './components/timelines/TimelinePage';
import { ResourcesPage } from './components/extraResources/ResourcesPage';
import { TimelineCreationPage } from './components/timelines/TimelineCreationPage';
import { LoginPage } from './components/login/loginPage';
import { Provider } from 'react-redux';
import store from './components/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (  
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage}/>
          <Stack.Screen name="Home" component={HomePage}/>
          <Stack.Screen name="ChatPage" component={ChatPage}/>
          <Stack.Screen name="TimelinePage" component={TimelinePage}/>
          <Stack.Screen name="TimelineCreationPage" component={TimelineCreationPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


