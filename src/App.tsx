/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  LogBox,
  StyleSheet,
 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProfilePage from './components/pages/ProfilePage';
import UserNavigator from './navigation/UserprofileNavigator';


LogBox.ignoreAllLogs();


function App(): JSX.Element {
 

  return (
  
    <NavigationContainer>
        <UserNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
