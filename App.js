import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Flexbox from './src/screens/Flexbox';
import Task from './src/screens/Task';
import Task2 from "./src/screens/Task2";




const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
        />
         <Stack.Screen 
          name="Signup" 
          component={SignUp}
        />
        <Stack.Screen 
          name="FlexBox" 
          component={Flexbox}
        />
        <Stack.Screen 
          name="Task" 
          component={Task}
        />
        <Stack.Screen 
          name="Task2" 
          component={Task2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "blue",
    fontSize: 30,
  },
  
  button: {
    padding: 10,
    backgroundColor: "aqua",
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 5,
  },
  
  input: {
    width: "93%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 6,
  },
});