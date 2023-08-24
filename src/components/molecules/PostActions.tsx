import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconAction from '../atoms/IconAction';

interface PostActionsProps {
  onLikePress: () => void;
  onSharePress: () => void;
  onCommentPress: () => void;
}

const PostActions: React.FC<PostActionsProps> = ({ onLikePress, onSharePress, onCommentPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <IconAction iconName="heart-o" text="3.4k"  onPress={onLikePress} />
      <IconAction iconName="comment-o" text="Comment" onPress={onCommentPress} />
      <IconAction iconName="share" text="Share" onPress={onSharePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});

export default PostActions;
