import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Avatar from '../atoms/Avatar';
import Text from '../atoms/Text';
import Post from '../molecules/Post';
import FriendListItem from '../molecules/FriendListItem';
import {Divider, Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../molecules/Header';
import DetailsCount from '../molecules/ProfileDetailsCount';
import { useNavigation } from '@react-navigation/native';

interface PostItem {
  id: string;
  text: string;
  picture: string;
}

interface UserProfileProps {
  user: {
    name: string;
    bio: string;
    imageUrl: string;
    posts: PostItem[];
    friends: string[];
  };
}

const UserProfile: React.FC<UserProfileProps> = ({user}) => {
  const navigation =  useNavigation();
  //like buttons action
  const onLikePress = (): void => {};
  //comment buttons action
  const onCommentPress = (): void => {};
  //share buttons action
  const onSharePress = (): void => {};
  //edit buttons action
  const onEditPress = (): void => {};
  // settings btn button
  const onSettingsPress = (): void => {};
  // friends count pressed
  const onFreindsCountPress = (): void => {
    navigation.navigate('FriendList', { friends: user.friends as string[] });

  };
  return (
    <ScrollView style={styles.container}>
      <Header
        onEditPress={onEditPress}
        onSettingsPress={onSettingsPress}
        iconShown={true}
      />
      <Avatar imageUrl={user.imageUrl} />

      <Text style={styles.name}>{user.name}</Text>

      <Text style={styles.bio}>{user.bio}</Text>
      <View style={{flexDirection: 'row'}}>
        <DetailsCount iconame={'hashtag'} name={`${user.posts.length} posts`}  />
        <DetailsCount
          iconame={'users'}
          name={`${user.friends.length} friends`} onPress={onFreindsCountPress}/>
      </View>
      <Divider />
      <Text style={styles.sectionHeader}>Posts</Text>
      {user.posts.map((post, index) => (
        <Post
          key={post.id}
          text={post.text}
          user={{
            name: user.name,
            profileImage: user.imageUrl, // Include the user's profile image in the post
          }}
          picture={post.picture}
          onLikePress={onLikePress}
          onSharePress={onSharePress}
          onCommentPress={onCommentPress}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    color: 'black',
  },
  freinds: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: 'black',
  },
  bio: {
    marginVertical: 9,
    color: 'black',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default UserProfile;
