import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import UserProfile from '../organisms/UserProfile';
import ProfileTemplate from '../template/ProfileTemplate';

const ProfilePage: React.FC = () => {
  return (
    <>
      <ProfileTemplate />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default ProfilePage;
