import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import PostComponent from '../components/PostComponent';
import {dummyRestaurantsData} from '../assets/data/dummyPostData';
import {Post} from '../../types';

const HomeScreen = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader />

      <FlatList
        data={dummyRestaurantsData}
        keyExtractor={k => k.id}
        renderItem={({item}: {item: Post}) => (
          <PostComponent
            id={item.id}
            userProfileImage={item.userProfileImage}
            redditUsername={item.redditUsername}
            title={item.title}
            body={item.body}
            imageUrl={item.imageUrl}
            likesCount={item.likesCount}
            commentsCount={item.commentsCount}
          />
        )}
      />
    </>
  );
};

export default HomeScreen;
