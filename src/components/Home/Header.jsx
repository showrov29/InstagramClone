import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  PlusCircleIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
} from 'react-native-heroicons/outline';
const Header = () => {
  return (
    <View className="flex flex-row items-center justify-between">
      <TouchableOpacity>
        <Image
          style={{width: 100, height: 50, resizeMode: 'contain'}}
          source={require('../../../assets/Logo-Instagram.png')}
        />
      </TouchableOpacity>
      <View className="flex flex-row space-x-4">
        <TouchableOpacity>
          <PlusCircleIcon size={33} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <HeartIcon size={33} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="absolute right-0.5 rounded-full px-1 z-10 -top-2 items-center bg-red-400">
            <Text className="text-center font-sm text-sm">11</Text>
          </View>
          <ChatBubbleOvalLeftIcon size={33} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
