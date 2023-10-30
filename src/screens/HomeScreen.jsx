import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../components/Home/Header';
import Stories from '../components/Home/Stories';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="mx-2">
        <Header />
        <Stories />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
