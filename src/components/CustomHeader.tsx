import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center justify-between p-4 bg-slate-800">
      <View className="flex-row items-center">
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text className="ml-4 text-lg font-bold">Header Title</Text>
      </View>
      <Image
        source={{uri: 'https://example.com/your-image.jpg'}}
        className="w-10 h-10 rounded-full"
      />
    </View>
  );
};

export default CustomHeader;
