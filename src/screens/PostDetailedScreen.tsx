import {View, Text} from 'react-native';
import React from 'react';
import CustomDetailedHeader from '../components/CustomDetailedHeader';
import {RouteProp, useRoute} from '@react-navigation/native';
import { RootStackParamList } from '../../types';

const PostDetailedScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'PostDetailed'>>();
  const {
    redditUsername,
    title,
    body,
    imageUrl,
    likesCount,
    commentsCount,
    userProfileImage,
  } = route.params;

  return (
    <>
      <CustomDetailedHeader />
      <Text>PostDetailedScreen</Text>
    </>
  );
};

export default PostDetailedScreen;
