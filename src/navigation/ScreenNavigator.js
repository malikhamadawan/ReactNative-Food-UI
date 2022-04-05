/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/signIn/SignIn';
import SignUp from '../screens/signUp/SignUp';
import { Splash } from '../screens/splash/Splash';
import { Dashboard } from '../screens/dashboard/Dashboard';
const Stack = createNativeStackNavigator();

 const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 
export default ScreenNavigator