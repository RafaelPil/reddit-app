import {View, Text, Image} from 'react-native';
import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      {/* Header */}
      <CustomHeader />

      {/* Main */}
      <View className="bg-white border-b-[0.5px] border-slate-200 px-4">
        {/* User row */}
        <View className="flex flex-row justify-between items-center ">
          {/* Left Side Row */}
          <View className="mt-2 flex flex-row items-center">
            <Image
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1729909787029078016/dBjB3Fnr_400x400.jpg',
              }}
              className="w-6 h-6 rounded-full"
              resizeMode="contain"
            />
            <Text className="ml-2 text-sm text-slate-800 font-medium">
              r/Random{'   '}
              <Text className="ml-2 text-sm text-slate-500 text-center font-normal">
                3h
              </Text>
            </Text>
          </View>
          {/* Right Side dots Row */}
          <Entypo name="dots-three-horizontal" size={18} />
        </View>

        {/* Title/Body/Image */}
        <View className="mt-1">
          {/* Title */}
          <Text className="font-semibold text-slate-900 text-lg leading-6">
            How happy would you be if you saw this ? (Image credits go to the
            maker)
          </Text>

          {/* Body */}
          <Text className="mt-1 text-sm leading-4 text-slate-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>

          {/* Image Container */}
          <View className="bg-white w-full h-72 rounded-2xl mt-2">
            <Image
              source={require('../assets/img/img-1.jpg')}
              className="w-full h-full rounded-2xl"
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
