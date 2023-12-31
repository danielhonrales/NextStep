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
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  return (  
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage}/>
          <Stack.Screen name="Home" component={HomePage}/>
          <Stack.Screen name="Chat" component={ChatPage}/>
          <Stack.Screen name="TimelinePage" component={TimelinePage} options={({route}) => ({title: route.params.name})}/>
          <Stack.Screen name="Timeline Creation" component={TimelineCreationPage}/>
          <Stack.Screen name="Extra Resources" component={ResourcesPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
