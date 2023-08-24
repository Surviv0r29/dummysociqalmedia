import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import UserProfile from '../organisms/UserProfile';

const user = {
  name: 'John Doe',
  bio: 'A man with mysteries',
  imageUrl: 'https://www.whatsappimages.in/wp-content/uploads/2022/03/New-Best-Joker-WhatsApp-DP-Pics-Images.jpg',
  posts: [
    {id: 'post1', text: 'Hello, World!', picture: 'https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    {id: 'post2', text: 'My first post.', picture: 'https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    {id: 'post3', text: 'Feeling good today!', picture: 'https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60' },
  ],
  friends: ['Alice', 'Bob', 'Charlie', 'David'],
};

const ProfileTemplate: React.FC = () => {
  return (
  
    <ScrollView style={styles.container}>
      <UserProfile user={user} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2',
  },
});

export default ProfileTemplate;
