import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import PostDetailedScreen from '../screens/PostDetailedScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LeftDrawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      screenOptions={{drawerPosition: 'left', headerShown: false}}>
      <LeftDrawer.Screen name="Home" component={BottomTabNavigation} />
      <Stack.Screen
        name="PostDetailed"
        component={PostDetailedScreen}
        options={{presentation: 'modal'}}
      />
    </LeftDrawer.Navigator>
  );
};

const RightDrawer = createDrawerNavigator();

const RightDrawerScreen = () => {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      screenOptions={{drawerPosition: 'right', headerShown: false}}>
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
};

const DrawerNavigation = () => {
  return <RightDrawerScreen />;
};

export default DrawerNavigation;
