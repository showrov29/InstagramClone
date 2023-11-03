import {View, Text, Image} from 'react-native';
import React from 'react';

export default function PostImage(props) {
  const {image} = props;
  return (
    <View>
      <Image
        source={{uri: image}}
        style={{
          width: '100%',
          height: 400,
          borderRadius: 5,
        }}
      />
    </View>
  );
}
