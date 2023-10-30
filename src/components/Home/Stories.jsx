import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import users from '../../../TempData/User';
const Stories = () => {
  return (
    <View className="mt-2">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((user, index) => (
          <View key={index} className="flex flex-col items-center mr-1">
            <Image
              source={{uri: user.image}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                borderWidth: 3,
                borderColor: '#ff8501',
              }}
            />
            <Text className="text-xs mt-1">
              {user.name.length > 10
                ? user.name.slice(0, 11) + '...'
                : user.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Stories;
