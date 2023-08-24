import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from '../components/pages/ProfilePage';
import FreindsPage from '../components/pages/FreindsPage';

const Stack = createStackNavigator();

const UserNavigator: React.FC = () => {
  return (
   
      <Stack.Navigator initialRouteName='UserProfile' screenOptions={{ headerShown:false }}>
         <Stack.Screen
          name="UserProfile"
          component={ProfilePage}
          options={{
            headerShown: false, // Hide the header for this screen
          }}
        />
        <Stack.Screen
          name="FriendList"
          component={FreindsPage}
          initialParams={{ friends: [] }} 
          options={{
            headerShown: false, // Hide the header for this screen
          }}
        />
      </Stack.Navigator>

  );
};

export default UserNavigator;





