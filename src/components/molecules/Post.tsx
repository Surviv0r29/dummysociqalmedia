import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PostActions from './PostActions';

interface PostProps {
  text: string;
  user: {
    name: string;
    profileImage: string;
  };
  picture: string;
  onLikePress: () => void;
  onSharePress: () => void;
  onCommentPress: () => void;
}

const Post: React.FC<PostProps> = ({ text, user, picture,onLikePress, onSharePress, onCommentPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.posttextcontainer}>
        <Text style={styles.postText}>{text}</Text>
      </View>
      <Image source={{ uri: picture }} style={styles.postImage} />
      <PostActions
        onLikePress={onLikePress}
        onSharePress={onSharePress}
        onCommentPress={onCommentPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 3, 
    shadowColor: 'rgba(0, 0, 0, 0.2)', 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  posttextcontainer: {
    marginVertical:5
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 200, // Adjust the height as needed
    resizeMode: 'cover',
    marginBottom: 12,
    borderRadius: 8,
  },
  postText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Post;