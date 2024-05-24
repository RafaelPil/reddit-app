import React from 'react';
import {View, Image, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import FocusedStatusBar from './CustomStatusBar';

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center justify-between p-4 bg-white">
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        transLucent={true}
      />
      <View className="flex-row">
        <Pressable
          onPress={() => navigation.getParent('LeftDrawer').openDrawer()}>
          <Feather name="menu" size={24} color="black" />
        </Pressable>
        <Image
          source={require('../assets/img/Reddit_Logo.png')}
          className="w-20 h-5 ml-2"
          resizeMode="contain"
        />
      </View>
      <View className="flex-row items-center">
        <AntDesign name="search1" size={24} color="black" />
        <Pressable
          onPress={() => navigation.getParent('RightDrawer').openDrawer()}>
          <Image
            source={{
              uri: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png',
            }}
            className="w-8 h-8 rounded-full ml-6"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default CustomHeader;
