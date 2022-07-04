import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/pages/Welcome';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
