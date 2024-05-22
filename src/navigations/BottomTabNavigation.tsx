import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screens/HomeScreen';
import CommunitiesScreen from '../screens/CommunitiesScreen';
import CreateScreen from '../screens/CreateScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="DrawerHome"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color={'#000'} />,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            color: '#000',
          },
        }}
      />
      <Tab.Screen
        name="Communities"
        component={CommunitiesScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="people-circle-outline" size={24} color={'#000'} />
          ),
          tabBarLabel: 'Communities',
          tabBarLabelStyle: {
            color: '#000',
          },
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: () => <AntDesign name="plus" size={24} color={'#000'} />,
          tabBarLabel: 'Create',
          tabBarLabelStyle: {
            color: '#000',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
