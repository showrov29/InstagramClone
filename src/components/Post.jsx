import React from 'react';
import {View, Text} from 'react-native';
import PostHeader from './Home/postHeader';
import PostImage from './Home/postImage';
import PostFooter from './Home/postFooter';

const Post = props => {
  const {post} = props;

  return (
    <View className="mt-4">
      <PostHeader profileImage={post.user.image} />
      <PostImage image={post.imageUrl} />
      <PostFooter
        likesCount={post.likes}
        comments={post.comments}
        caption={post.caption}
      />
    </View>
  );
};

export default Post;
