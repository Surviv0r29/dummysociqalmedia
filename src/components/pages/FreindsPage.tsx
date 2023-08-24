import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import FriendsTemplate from '../template/FriendsTemplate';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
    FriendList: { friends: string[] };
  };

  type FriendListScreenRouteProp = RouteProp<RootStackParamList, 'FriendList'>;
  type FriendListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FriendList'>;
  
  interface FriendListProps {
    route: FriendListScreenRouteProp;
    navigation: FriendListScreenNavigationProp;
  }
  
  
const FreindsPage: React.FC<FriendListProps> = ({route}) => {
   
    const { friends } = route.params;
   

  return (
    <>
      <FriendsTemplate friends={friends||[]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default FreindsPage;