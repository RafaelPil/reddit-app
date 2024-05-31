import React from 'react';
import {View, Image, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import CustomStatusBar from './CustomStatusBar';
import FilterIcon from '../assets/img/filter-icon.svg';

const CustomDetailedHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center justify-between px-4 py-2 bg-[#282828] border-b-[0.5px] border-slate-100">
      <CustomStatusBar
        barStyle="light-content"
        backgroundColor="#282828"
        transLucent={true}
      />

      {/* Left */}
      <View className="flex items-start">
        <Pressable
          className="flex items-center"
          onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={30} color="white" />
        </Pressable>
      </View>

      {/* Right */}
      <View className="flex-row items-center">
        {/* search */}
        <AntDesign name="search1" size={24} color="white" />
        {/* Svg filter */}
        <View className="ml-3 mr-3">
          <FilterIcon width={30} height={30} />
        </View>
        {/* dots */}
        <Entypo name="dots-three-horizontal" size={18} color={'#fff'} />

        <Pressable
          className="-ml-2"
          onPress={() => navigation.getParent('RightDrawer').openDrawer()}>
          <Image
            source={{
              uri: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png',
            }}
            className="w-8 h-8 rounded-full ml-6"
          />
          {/* Online status */}
          <View className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 left-5">
            <View className="w-full h-full rounded-full border-2 border-[#282828]" />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomDetailedHeader;
