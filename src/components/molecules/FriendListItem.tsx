import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface FriendListItemProps {
  name: string;
  profileImage: string;
}

const FriendListItem: React.FC<FriendListItemProps> = ({ name, profileImage }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FriendListItem;
