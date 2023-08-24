import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import FreindList from '../organisms/Friendlist';

interface FriendlistProps {
  friends:string[]
}


const FriendsTemplate: React.FC<FriendlistProps> = ({friends}) => {
    return (
    
      <ScrollView style={styles.container}>
        <FreindList freinds={friends}/>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#f2f2f2',
    },
  });
  
  export default FriendsTemplate;