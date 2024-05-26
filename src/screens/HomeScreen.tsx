import {View, Text, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import PostComponent from '../components/PostComponent';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      {/* Header */}
      <CustomHeader />
      <PostComponent />
    </>
  );
};

export default HomeScreen;
