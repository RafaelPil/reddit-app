import React from 'react';
import {View, Image, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import FocusedStatusBar from './CustomStatusBar';

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center justify-between px-4 py-2 bg-white border-b-[0.5px] border-slate-100">
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        transLucent={true}
      />

      {/* Left */}
      <View className="flex-row items-start">
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

      {/* Right */}
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
          {/* Online status */}
          <View className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 left-5">
            <View className="w-full h-full rounded-full border-2 border-white" />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomHeader;
