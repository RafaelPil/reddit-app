import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomDetailedHeader from '../components/CustomDetailedHeader';
import {RouteProp, useRoute} from '@react-navigation/native';
import {PostComponentProps, RootStackParamList} from '../../types';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {dummyRestaurantsData} from '../assets/data/dummyPostData';
import PostDetailsComponent from '../components/PostDetailsComponent';

const PostDetailsScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'PostDetails'>>();
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

      <PostDetailsComponent postData={postData} />
    </>
  );
};

export default PostDetailsScreen;
