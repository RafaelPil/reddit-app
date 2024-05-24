import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
    <CustomHeader />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          onPress={() => navigation.getParent('LeftDrawer').openDrawer()}
          title="Open left drawer"
        />
        <Button
          onPress={() => navigation.getParent('RightDrawer').openDrawer()}
          title="Open right drawer"
        />
      </View>
    </>
  );
};

export default HomeScreen;
