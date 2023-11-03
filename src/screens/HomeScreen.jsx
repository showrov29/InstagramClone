import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Header from '../components/Home/Header';
import Stories from '../components/Home/Stories';
import Post from '../components/Post';
import postData from '../../TempData/postData';
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="mx-2">
        <Header />
        <Stories />
        <ScrollView>
          {postData.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
