import {View, Text, Image, Pressable} from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomDetailedHeader from '../components/CustomDetailedHeader';
import {RouteProp, useRoute} from '@react-navigation/native';
import {PostComponentProps, RootStackParamList} from '../../types';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { dummyRestaurantsData } from '../assets/data/dummyPostData';

const PostDetailedScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'PostDetailed'>>();
  const {id} = route.params;

  const [postData, setPostData] = useState<PostComponentProps | null>(null);

  useEffect(() => {
    const fetchedData = dummyRestaurantsData.find(post => post.id === id);
    setPostData(fetchedData || null);
  }, [id]);

  if (!postData) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <CustomDetailedHeader />

      {/* Main */}
      <View className="bg-white border-b-[0.5px] border-slate-200 px-4">
        {/* User row */}
        <View className="flex flex-row justify-between items-center ">
          {/* Left Side Row */}
          <View className="mt-2 flex flex-row items-center">
            <Image
              source={{
                uri: postData.userProfileImage,
              }}
              className="w-6 h-6 rounded-full"
              resizeMode="cover"
            />
            <Text className="ml-2 text-sm text-slate-800 font-medium">
              {postData.redditUsername}
              {'   '}
              <Text className="ml-2 text-sm text-slate-500 text-center font-normal">
                3h
              </Text>
            </Text>
          </View>
          {/* Right Side dots Row */}
          <Entypo name="dots-three-horizontal" size={18} color={'#1e293b'} />
        </View>

        {/* Title/Body/Image */}
        <View className="mt-1">
          {/* Title */}
          {postData.title && (
            <Text className="font-semibold text-slate-900 text-lg leading-6">
              {postData.title}
            </Text>
          )}

          {/* Body */}
          {postData.body && (
            <Text className="mt-1 text-sm leading-4 text-slate-600">
              {postData.body}
            </Text>
          )}

          {/* Image Container */}
          {postData.imageUrl && (
            <View className="bg-white w-full h-72 rounded-2xl mt-2">
              <Image
                source={{uri: postData.imageUrl}}
                className="w-full h-full rounded-2xl"
                resizeMode="cover"
              />
            </View>
          )}
        </View>

        {/* Buttons Row */}
        <View className="flex flex-row items-center justify-between">
          {/* Left buttons Container */}
          <View className="mt-2 mb-1 flex flex-row items-center">
            {/* Like/Dislike */}
            <View className="w-24 h-8 border-[1px] border-slate-200 rounded-3xl flex flex-row justify-center items-center">
              <MaterialCommunityIcons
                name="arrow-up-bold-outline"
                size={18}
                color={'#1e293b'}
              />
              {/* Like Count */}
              <Text className="text-slate-800 text-sm">{postData.likesCount}</Text>
              {/* separator */}
              <View className="w-px h-4 bg-slate-300 mx-2" />
              <MaterialCommunityIcons
                name="arrow-down-bold-outline"
                size={18}
                color={'#1e293b'}
              />
            </View>

            {/* Comments */}
            <View className="w-16 h-8 ml-2 border-[1px] border-slate-200 rounded-3xl flex flex-row justify-center items-center">
              <Ionicons name="chatbubble-outline" size={16} color={'#1e293b'} />
              <Text className="text-slate-800 text-sm ml-1 font-normal">
                {postData.commentsCount}
              </Text>
            </View>

            {/* Award */}
            <View className="w-10 h-8 ml-2 border-[1px] border-slate-200 rounded-3xl flex flex-row justify-center items-center">
              <Feather name="award" size={16} color={'#1e293b'} />
            </View>
          </View>

          {/* Right Buttons Container */}
          <View className="w-10 h-8 ml-2 border-[1px] border-slate-200 rounded-3xl flex flex-row justify-center items-center">
            <MaterialCommunityIcons
              name="share-outline"
              size={22}
              color={'#1e293b'}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default PostDetailedScreen;
