import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dummy} from '../screens/dummy/Dummy';
import Dummy1 from '../screens/dummy/Dummy1';
import {Dummy2} from '../screens/dummy/Dummy2';
import {Dummy3} from '../screens/dummy/Dummy3';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Dashboard} from '../screens/dashboard/Dashboard';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
        //tabBarStyle: {backgroundColor: 'red'},
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="ios-home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Dummy1"
        component={Dummy1}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icons name="cog" color={color} size={22} />,
        }}
      />
      <Tab.Screen
        name="Dummy2"
        component={Dummy2}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="local-grocery-store" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Dummy3"
        component={Dummy3}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="person" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
