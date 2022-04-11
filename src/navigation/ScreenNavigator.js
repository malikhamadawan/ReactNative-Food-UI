/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/signIn/SignIn';
import SignUp from '../screens/signUp/SignUp';
import {Splash} from '../screens/splash/Splash';
import MyTabs from './MyTabs';
import Cart from '../screens/dashboard/Cart';
import Dummy1 from '../screens/dummy/Dummy1';
const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dummy1"
          component={Dummy1}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen
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
         <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
              <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ScreenNavigator;
