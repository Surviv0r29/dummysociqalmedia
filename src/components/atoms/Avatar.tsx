import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface AvatarProps {
  imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 40,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

export default Avatar;