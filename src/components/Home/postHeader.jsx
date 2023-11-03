import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const PostHeader = props => {
  const {profileImage} = props;

  return (
    <View className="border-t border-black py-1 flex flex-row justify-between px-1 items -center">
      <Image
        source={{uri: profileImage}}
        style={{
          height: 30,
          width: 30,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#ff8501',
        }}
      />
      <TouchableOpacity activeOpacity={0.7}>
        <Text className="text-xl font-semibold">...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PostHeader;
